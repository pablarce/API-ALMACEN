(function () {
    'use strict';

    module.exports = {
        createEquipment: createEquipment,
        fetchEquipments: fetchEquipments,
        fetchEquipmentById: fetchEquipmentById,
        updateEquipment: updateEquipment,
        deleteEquipment: deleteEquipment
    };

    var EquipmentModel = require('./equipment.module')().EquipmentModel;
    function createEquipment(equipment) {
        return EquipmentModel.create(equipment);
    }

    function fetchEquipments() {
        return EquipmentModel.find({})
            .exec();
    }

    function fetchEquipmentById(equipmentId) {
        return EquipmentModel.findById(equipmentId)
            .exec();
    }

    function updateEquipment(equipmentId, equipment) {
        return EquipmentModel
            .findByIdAndUpdate(equipmentId, equipment, {new: true})
            .exec();
    }

    function deleteEquipment(equipmentId) {
        return EquipmentModel
            .findByIdAndRemove(equipmentId)
            .exec();
    }
})();
