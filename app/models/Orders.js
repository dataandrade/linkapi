const Mongoose = require("mongoose");
//const UniqueValidator = require("mongoose-unique-validator");

const OrdersSchema = new Mongoose.Schema({
  date: {
    type: Date,
    require: [true, "require data information"],
    index: true,
    unique: true
  },
  totalAmount: {
    type: Number,
    require: [true, "require data information"]
  },
  orders: [Object]
});

Mongoose.model("Orders", OrdersSchema);