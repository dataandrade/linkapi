const fetch = require("node-fetch");

const AppConstants = require("../constants/App");
const BlingUtils = require("../utils/Bling");

const BlingService = {
    async createBlingOrders(pipedriveDeals){
      
        const blingOrdersXml = BlingUtils.ObjectToXml("pedido", pipedriveDeals);
        
        const URL = `${AppConstants.BLING_BASE_URL}/pedido/json/&apikey=${AppConstants.BLING_API_KEY}&xml=${blingOrdersXml}`;

        return fetch(URL, { method: "POST"})
                .then(res => res.json())
                .then(blingOrdersCreated => blingOrdersCreated);
    
    }
};

module.exports = BlingService;