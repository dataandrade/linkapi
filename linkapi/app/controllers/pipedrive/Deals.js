/* Importação de dependencias */
const PipedriveService = require("../../services/Pipedrive");
 
exports.patchPipedriveBlingDeals = async function(req, res, next) {

  const deals = await PipedriveService.patchPipedriveBlingDeals();

  return res.status(200)
          .send({...deals});
};