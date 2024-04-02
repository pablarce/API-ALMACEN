(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var WarehouseMiddleware = require('./warehouse.module')().WarehouseMiddleware;

    router.post('/',
        WarehouseMiddleware.addWarehouse,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        WarehouseMiddleware.getWarehouses,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:warehouseId',
        WarehouseMiddleware.getWarehouseById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:WarehouseId',
        WarehouseMiddleware.modifyWarehouse,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:WarehouseId',
        WarehouseMiddleware.removeWarehouse,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
