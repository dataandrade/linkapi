const fetch = require('node-fetch');

const AppConstants = require("../constants/App");
const PipedriveUtils = require("../utils/Pipedrive");
const BlingService = require("../services/Bling");

const paginationLimit = AppConstants.PIPEDRIVE_PAGINATION_LIMIT;

const PipedriveService = {
    
    async getPipedriveDeals(currentPagination = 0){
        
        const URL = `${AppConstants.PIPEDRIVE_BASE_URL}/api/v1/deals?filter_id=${AppConstants.PIPEDRIVE_CUSTOM_FILTER_ID}&start=${currentPagination}&limit=${paginationLimit}&api_token=${AppConstants.PIPEDRIVE_API_KEY}`;
        
        return fetch(URL, { method: "GET"})
                .then(res => res.json()) 
                .then(pipeDriveDeals => pipeDriveDeals.data);
    
    },

    async patchPipedriveBlingDeals(currentPagination = 0) {
        return this.getPipedriveDeals(currentPagination)
                    .then(async (deals) => {
                        if(deals){
                            for(let i = 0; i < deals.length; i++){
                                await this.sendPipedriveDeals([deals[i]]);
                            }                            
                            return this.patchPipedriveBlingDeals(currentPagination += paginationLimit)
                        }
                    });
    },

    async sendPipedriveDeals(pipedriveDeals){    
        const dealsFormated = PipedriveUtils.BlingFormat(pipedriveDeals);
        return await BlingService.createBlingOrders(dealsFormated);
    }
};

module.exports = PipedriveService;