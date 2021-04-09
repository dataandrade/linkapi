const fetch = require('node-fetch');
const CronJob = require("cron").CronJob;

const AppConstants = require("../constants/App");
const PipedriveService = require("../services/Pipedrive");


const PipedriveJob = new CronJob(
  "0 0 * * *",
  function() {

    const pipedriveDeals = PipedriveService.getPipedriveDealsByStatus();

    // Sanitizar retorno de pipedriveDeals conforme eh necessario dentro do bling
    const createPipedriveDealsBling = PipedriveService.createDealsBling(pipedriveDeals);
    console.log(createPipedriveDealsBling);
    
  },
  null,
  true,
  "America/Sao_Paulo"
);

const Cron = {

  async getPipedriveDealsByStatus(status = "won"){

    const params = {
      URL: AppConstants.PIPEDRIVE_BASE_URL,
      path: `/deals?status=${status}
            &api_token=${AppConstants.PIPEDRIVE_API_KEY}`,
      method: "GET"
    };

    await fetch(params)
      .then(res => res.json())
      .then(pipeDriveDeals => pipeDriveDeals)

  },

  start(){

  },  
  isRunning(){}
};

module.exports = {
  PipedriveJob
};