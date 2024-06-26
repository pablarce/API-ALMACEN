(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

  var WarehouseSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },warehouseId: {
      type: Number,
    },
    capacity: Number,
  });

  module.exports = mongoose.model("warehouses", WarehouseSchema);
})();
