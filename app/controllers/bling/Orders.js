/* Importação de dependencias */
const Mongoose = require("mongoose");

const BlingService = require("../../services/Bling");

exports.create = async function(req, res, next) {

  const orders = await BlingService.createBlingOrders({});
  return res.status(201)
          .send({...orders});
};