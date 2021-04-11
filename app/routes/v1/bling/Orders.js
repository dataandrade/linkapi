const router = require("express").Router();

const OrdersController = require("../../../controllers/bling/Orders");

router 
  .route("/orders/report")  
  .get(OrdersController.getDailyBlingReport)
  .patch(OrdersController.patchDailyBlingReport);

module.exports = router;