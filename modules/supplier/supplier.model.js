(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var SupplierSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['company', 'individual'],
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        category: String
    });

    module.exports = mongoose.model('supplier', SupplierSchema);
})();