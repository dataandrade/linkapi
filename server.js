const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./database");

require("./app/models");

app.use(require("./app/routes"));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Escutando na porta " + server.address().port);
});