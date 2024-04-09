(function () {
    'use strict';

    module.exports = {
        addEquipment: addEquipment,
        getEquipments: getEquipments,
        getEquipmentById: getEquipmentById,
        modifyEquipment: modifyEquipment,
        removeEquipment: removeEquipment
    };
   
    var EquipmentService = require('./equipment.module')().EquipmentService;

    function addEquipment(req, res, next) {
        EquipmentService.createEquipment(req.body)
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

    function getEquipments(req, res, next) {

        EquipmentService.fetchEquipments()
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

    function getEquipmentById(req, res, next) {

        EquipmentService.fetchEquipmentById(req.params.equipmentId)
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

function modifyEquipment(req, res, next) {
        EquipmentService.updateEquipment(req.params.equipmentId, req.body)
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

    function removeEquipment(req, res, next) {

        EquipmentService.deleteEquipment(req.params.equipmentId)
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