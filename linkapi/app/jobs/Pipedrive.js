const Jobs = require("./Cron");

const PipedriveCron = {
  start(){
    Jobs.PipedriveCron.start();
  }
};

module.exports = PipedriveCron;

