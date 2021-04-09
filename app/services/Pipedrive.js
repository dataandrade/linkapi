const AppConstants = require("../constants/App");
const fetch = require('node-fetch');

const PipedriveService = {
    async getPipedriveDeals(){
      
        const URL = `${AppConstants.PIPEDRIVE_BASE_URL}/api/v1/deals?status=won&api_token=${AppConstants.PIPEDRIVE_API_KEY}`;

        return fetch(URL, { method: "GET"})
                .then(res => res.json())
                .then(pipeDriveDeals => pipeDriveDeals);
    
    }
};

module.exports = PipedriveService;