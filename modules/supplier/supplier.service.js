(function () {
    'use strict';

    module.exports = {
        createSupplier: createSupplier,
        fetchSupplier: fetchSuppliers,
        fetchSupplierById: fetchSupplierById,
        updateSupplier: updateSupplier,
        deleteSupplier: deleteSupplier
    };

    var SupplierModel = require('./supplier.module')().SupplierModel;
    function createSupplier(supplier) {
        return SupplierModel.create(supplier);
    }

    function fetchSuppliers() {
        return SupplierModel.find({})
            .exec();
    }

    function fetchSupplierById(supplierId) {
        return SupplierModel.findById(supplierId)
            .exec();
    }

    function updateSupplier(supplierId, supplier) {
        return SupplierModel
            .findByIdAndUpdate(supplierId, supplier, {new: true})
            .exec();
    }

    function deleteSupplier(supplierId) {
        return SupplierModel
            .findByIdAndRemove(supplierId)
            .exec();
    }
})();
