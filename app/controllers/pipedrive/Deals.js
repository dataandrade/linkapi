/* Importação de dependencias */
const Mongoose = require("mongoose");

const PipedriveService = require("../../services/Pipedrive");

exports.getPipedriveDeals = async function(req, res, next) {

  const leads = await PipedriveService.getPipedriveDeals();
  return res.status(200)
          .send({...leads});
};