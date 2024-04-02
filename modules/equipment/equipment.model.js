(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var EquipmentSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        description: String,
        quantity: Number,
        warehouse: {
            type: Schema.Types.ObjectId,
            ref: 'Warehouse'
        }
    });

    module.exports = mongoose.model('equipments', EquipmentSchema);
})();