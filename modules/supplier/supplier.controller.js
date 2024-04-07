(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var SupplierMiddleware = require('./supplier.module')().SupplierMiddleware;

    router.post('/',
        SupplierMiddleware.addSupplier,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        SupplierMiddleware.getSuppliers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:supplierId',
        SupplierMiddleware.getSupplierById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:SupplierId',
        SupplierMiddleware.modifySupplier,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:SupplierId',
        SupplierMiddleware.removeSupplier,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
