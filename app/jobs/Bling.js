const CronJob = require("cron").CronJob;

const BlingJob = new CronJob(
  "0 1 * * *",
  function() {

    
    // this function doesnt return any value. (void)
  },
  null,
  true,
  "America/Sao_Paulo"
);

module.exports = {
    BlingJob
};