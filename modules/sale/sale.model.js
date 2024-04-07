(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var SaleSchema = new Schema({
        saleId: {
            type: Number,
            required: true
        },
        clientId: {
            type: Number,
            required: true
        },
        employeeId: {
            type: Number,
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
        date: {
            type: Date,
            default: Date.now,
            required: false
        },
        paymentMethod: {
            type: String,
            enum: ['cash', 'creditCard'],

        },
        status: {
            type: String,
            enum: ['done', 'pending', 'cancelled'],
            default: 'pending',
            required: false
        },
    });

    module.exports = mongoose.model('sale', SaleSchema);
})();