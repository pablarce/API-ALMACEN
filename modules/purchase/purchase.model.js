(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var PurchaseSchema = new Schema({
        
        clientId: {
            type: String,
            required: true
        },
        supplierId: {
            type: String,
            required: true
        },
        items: [{
            productId: {
                type: Number,
                required: true
            },
            amount: {
                type: Number,
                required: true
            }
        }],
        totalCost: {
            type: Number,
            required: true
        },
        purchaseDate: {
            type: Date,
            required: true
        }
        
    });

    module.exports = mongoose.model('purchases', PurchaseSchema);
})();