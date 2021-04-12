const CronJob = require("cron").CronJob;

const PipedriveService = require("../services/Pipedrive");
const BlingService = require("../services/Bling");

// everyday at 1am
const PipedriveCron = new CronJob(
    "00 01 00 * * *",
    async function() {
        
        console.info(`\n## [Start] - CronJob for Pipedrive ##\n`);
        await PipedriveService.patchPipedriveBlingDeals();
        console.info(`\n## [Finished] - CronJob for Pipedrive ##\n`);
      
    },
    null,
    true,
    "America/Sao_Paulo"
);

// everyday at 2am
const BlingCron = new CronJob(
    "00 02 00 * * *", 
    async function() {

        console.info(`\n## [Start] - Running CronJob for Bling ##\n`);
        await BlingService.createDailyBlingReport();
        console.info(`\n## [Finished] - Running CronJob for Bling ##\n`);

    },
    null,
    true,
    "America/Sao_Paulo"
);

module.exports = {
    PipedriveCron,
    BlingCron
};