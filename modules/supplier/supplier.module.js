(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            SupplierController: require('./supplier.controller'),
            SupplierMiddleware: require('./supplier.middleware'),
            SupplierService: require('./supplier.service'),
            SupplierModel: require('./supplier.model')
        }
    }

})();
