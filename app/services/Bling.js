const fetch = require("node-fetch");
const Mongoose = require("mongoose");

const OrderModel = Mongoose.model("Orders");

const AppConstants = require("../constants/App");
const BlingUtils = require("../utils/Bling");
const DateUtils = require("../utils/Date");

const BlingService = {
    async createBlingOrders(pipedriveDeals){
      
        const blingOrdersXml = BlingUtils.ObjectToXml("pedido", pipedriveDeals);
        
        const URL = `${AppConstants.BLING_BASE_URL}/pedido/json/&apikey=${AppConstants.BLING_API_KEY}&xml=${blingOrdersXml}`;

        return fetch(URL, { method: "POST"})
                .then(res => res.json())
                .then(blingOrdersCreated => blingOrdersCreated);
    
    },
    // cron diaria
    async getBlingOrdersByDate(date){
        
        const URL = `${AppConstants.BLING_BASE_URL}/pedidos/json/?dataEmissao=[${date} TO ${date}]&apikey=${AppConstants.BLING_API_KEY}`;

        return fetch(URL)
                .then(orders => orders.json())
                .then(orders => orders.retorno.pedidos);
        
    },    
    async createDailyBlingReport(){
        
        const today = DateUtils.getBrazilianDateTime('DD-MM-YYYY');
        const orders = await this.getBlingOrdersByDate(today);
        
        const totalDayAmount = orders
                                .map((order) => parseFloat(order.pedido.totalvenda))
                                .reduce((acc, current) => acc + current);


        const order = new OrderModel({
            date: today,
            totalAmount: totalDayAmount,
            orders: orders
        });


        return order.save()
                    .then((ordersByDate) => ordersByDate)
                    .catch((err) => err);

    }
};

module.exports = BlingService;