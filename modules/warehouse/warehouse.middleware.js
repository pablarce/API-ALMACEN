(function () {
    'use strict';

    module.exports = {
        addWarehouse: addWarehouse,
        getWarehouses: getWarehouses,
        getWarehouseById: getWarehouseById,
        modifyWarehouse: modifyWarehouse,
        removeWarehouse: removeWarehouse
    };
   
    var WarehouseService = require('./warehouse.module')().WarehouseService;

    function addWarehouse(req, res, next) {
        WarehouseService.createWarehouse(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getWarehouses(req, res, next) {

        WarehouseService.fetchWarehouses()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getWarehouseById(req, res, next) {

        WarehouseService.fetchWarehouseById(req.params.warehouseId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

function modifyWarehouse(req, res, next) {
        WarehouseService.updateUser(req.params.warehouseId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeWarehouse(req, res, next) {

        WarehouseService.deleteWarehouse(req.params.warehouseId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }



})();
