(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var EquipmentMiddleware = require('./equipment.module')().EquipmentMiddleware;

    router.post('/',
        EquipmentMiddleware.addEquipment,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        EquipmentMiddleware.getEquipments,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:equipmentId',
        EquipmentMiddleware.getEquipmentById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:EquipmentId',
        EquipmentMiddleware.modifyEquipment,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:EquipmentId',
        EquipmentMiddleware.removeEquipment,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
