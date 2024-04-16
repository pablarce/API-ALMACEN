(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

  var ProductSchema = new Schema({
    product_name: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });

  module.exports = mongoose.model("products", ProductSchema);
})();
