/* Importação de dependencias */
const Mongoose = require("mongoose");
//const UniqueValidator = require("mongoose-unique-validator");

// /* Importação de Plugins */
// const SenhaPlugin = require("../plugins/Senha.plugin");

const LeadsSchema = new Mongoose.Schema({
  date: {
    type: Date,
    require: [true, "não pode ser vazio"],
    index: true,
    unique: true
  },
  totalAmount: {
    type: String
  },
  leads: {
   type: [
       {
            leadName: String,
            amount: String
       }
   ]
  }
});

/* Registra plugin para o model. */
// UsuarioSchema.plugin(UniqueValidator, { mensagem: "já existe" });
// UsuarioSchema.plugin(SenhaPlugin);

Mongoose.model("Leads", LeadsSchema);