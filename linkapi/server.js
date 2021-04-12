require("module-alias/register");

const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

require("./database");

require("./app/models");

app.use(require("./app/routes"));

const CronJobs = require("./app/jobs/Cron");

CronJobs.PipedriveCron.start();
CronJobs.BlingCron.start();

var server = app.listen(process.env.PORT || 3002, function() {
  console.log("Listening to port " + server.address().port);
});