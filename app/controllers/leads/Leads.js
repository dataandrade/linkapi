/* Importação de dependencias */
const Mongoose = require("mongoose");

/* Importação Models */
const Leads = Mongoose.model("Leads");

/* Controller responsável pela criação de novos serviços em que possa ser gerado um */
exports.create = function(req, res, next) {
  //let body = req.body;

  let leads = new Leads();
  
  leads.date = new Date();
  leads.totalAmount = "1";
  leads.leads = [{
      leadName: "Rodrigo",
      amount: "2"
  }];
  
  leads
    .save()
    .then(leadCreated => {
      return res.status(201).send({
        ...leadCreated
      });
    })
    .catch(next);
};