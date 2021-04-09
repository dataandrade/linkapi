/* Importação de dependencias */
const router = require("express").Router();

// /* Importação de middlewares */
// const SchemaValidator = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const LeadsController = require("../../../controllers/leads/Leads");

/*  */
router
  .route("/leads")
  .post(LeadsController.create);

module.exports = router;