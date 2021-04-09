/* Importação de dependencias */
const router = require("express").Router();

// /* Importação de middlewares */
// const SchemaValidator = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const DealsController = require("../../../controllers/pipedrive/Deals");

router
  .route("/deals")
  .get(DealsController.getPipedriveDeals)

module.exports = router;