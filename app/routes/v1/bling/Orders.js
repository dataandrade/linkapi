/* Importação de dependencias */
const router = require("express").Router();

// /* Importação de middlewares */
// const SchemaValidator = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const OrdersController = require("../../../controllers/bling/Orders");

router
  .route("/orders")
  .patch(OrdersController.create)

module.exports = router;