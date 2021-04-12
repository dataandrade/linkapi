const Mongoose = require("mongoose");
//const UniqueValidator = require("mongoose-unique-validator");

const OrdersSchema = new Mongoose.Schema({
  date: {
    type: String,
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

OrdersSchema.methods.formatedJSON = function(){
  return {
    date: this.date,
    totalAmount: this.totalAmount,
    orders: this.orders
  };
};

Mongoose.model("Orders", OrdersSchema);