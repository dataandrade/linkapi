// packages
const fetch = require("node-fetch");
const Mongoose = require("mongoose");

// models
const OrderModel = Mongoose.model("Orders");

// app imports
const AppConstants = require("../constants/App");
const BlingUtils = require("../utils/Bling");
const DateUtils = require("../utils/Date");

const BlingService = {
    async createBlingOrders(pipedriveDeals){
      
        const blingOrdersXml = BlingUtils.ObjectToXml("pedido", pipedriveDeals);
        
        const URL = `${AppConstants.BLING_BASE_URL}/pedido/json/&apikey=${AppConstants.BLING_API_KEY}&xml=${blingOrdersXml}`;

        return fetch(URL, { method: "POST"})
                .then(res => res.json())
                .then((checkCreationErrors) => {
                    if(checkCreationErrors.retorno && checkCreationErrors.retorno.erros)
                        console.error(`\n\n!!!!! Detected error while creating order !!!!!\n\n${JSON.stringify(pipedriveDeals)}\n\n`);
                })
                .then(blingOrdersCreated => blingOrdersCreated);
    
    },
    
    async getBlingOrdersByDate(date){
        
        const URL = `${AppConstants.BLING_BASE_URL}/pedidos/json/?filters=dataEmissao[${date} TO ${date}]&apikey=${AppConstants.BLING_API_KEY}`;
        
        return fetch(URL)
                .then(orders => orders.json())
                .then(orders => orders.retorno);
        
    },

    async createDailyBlingReport(){
        const yesterday = DateUtils.getYesterdayBrazilianFormat("DD/MM/YYYY");
        return await this.getBlingOrdersByDate(yesterday)
                            .then((checkOrdersExistence) => {
                                console.log(checkOrdersExistence);
                                if(checkOrdersExistence.retorno && checkOrdersExistence.retorno.erros)
                                    return {
                                        pedidos: []
                                    };
                                    
                                return checkOrdersExistence;
                            })
                            .then((orders) => {
                                if(orders && orders.pedidos && orders.pedidos.length > 0){
                                    const totalDayAmount = orders.pedidos
                                                            .map((order) => parseFloat(order.pedido.totalvenda))
                                                            .reduce((sum, currentTotalVenda) => sum + currentTotalVenda);
                        
                                    const order = new OrderModel({
                                        date: yesterday,
                                        totalAmount: totalDayAmount,
                                        orders: orders.pedidos
                                    });

                                    return order.save()
                                                .then(() => {
                                                    return {
                                                        message: `Daily report successfully executed.`
                                                    }
                                                })
                                                .catch((err) => {
                                                    return {
                                                        message: `Error trying to create daily report.`,
                                                        error: JSON.stringify(err)
                                                    }
                                                });
            
                                } else {
                                    return {
                                        message: "Nothing to report."
                                    }
                                }
                                
                            })
                            .catch((error) => console.error(error));

    }
};

module.exports = BlingService;