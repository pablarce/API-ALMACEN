(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

  var EquipmentSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: String,
    quantity: Number,
    warehouseId: {
      type: String,
      ref: "Warehouse",
    },
  });

  module.exports = mongoose.model("equipments", EquipmentSchema);
})();
