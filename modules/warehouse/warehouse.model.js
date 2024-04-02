(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var WarehouseSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        capacity: Number,
        products: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }]
    });

    module.exports = mongoose.model('warehouses', WarehouseSchema);
})();