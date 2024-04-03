(function () {
    'use strict';

    module.exports = {
        addSupplier: addSupplier,
        getSuppliers: getSuppliers,
        getSupplierById: getSupplierById,
        modifySupplier: modifySupplier,
        removeSupplier: removeSupplier
    };
   
    var SupplierService = require('./supplier.module')().SupplierService;

    function addSupplier(req, res, next) {
        SupplierService.createSupplier(req.body)
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

    function getSuppliers(req, res, next) {

        SupplierService.fetchUsers()
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

    function getSupplierById(req, res, next) {

        SupplierService.fetchSupplierById(req.params.supplierId)
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

function modifySupplier(req, res, next) {
        SupplierService.updateSupplier(req.params.supplierId, req.body)
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

    function removeSupplier(req, res, next) {

        SupplierService.deleteSupplier(req.params.supplierId)
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
