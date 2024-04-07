(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            WarehouseController: require('./warehouse.controller'),
            WarehouseMiddleware: require('./warehouse.middleware'),
            WarehouseService: require('./warehouse.service'),
            WarehouseModel: require('./warehouse.model')
        }
    }

})();