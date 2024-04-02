(function () {
    'use strict';

    module.exports = {
        createWarehouse: createWarehouse,
        fetchWarehouses: fetchWarehouses,
        fetchWarehouseById: fetchWarehouseById,
        updateWarehouse: updateWarehouse,
        deleteWarehouse: deleteWarehouse
    };

    var WarehouseModel = require('./warehouse.module')().WarehouseModel;
    function createWarehouse(warehouse) {
        return WarehouseModel.create(warehouse);
    }

    function fetchWarehouses() {
        return WarehouseModel.find({})
            .exec();
    }

    function fetchWarehouseById(warehouseId) {
        return WarehouseModel.findById(warehouseId)
            .exec();
    }

    function updateWarehouse(warehouseId, warehouse) {
        return WarehouseModel
            .findByIdAndUpdate(warehouseId, warehouse, {new: true})
            .exec();
    }

    function deleteWarehouse(warehouseId) {
        return WarehouseModel
            .findByIdAndRemove(warehouseId)
            .exec();
    }
})();
