(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var DistributorSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        contactPerson: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        country: String
    });

    module.exports = mongoose.model('distributors', DistributorSchema);
})();