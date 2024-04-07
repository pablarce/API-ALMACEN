(function () {
    'use strict';

    module.exports = {
        createDistributor: createDistributor,
        fetchDistributors: fetchDistributors,
        fetchDistributorById: fetchDistributorById,
        updateDistributor: updateDistributor,
        deleteDistributor: deleteDistributor
    };

    var DistributorModel = require('./distributor.module')().DistributorModel;
    function createDistributor(distributor) {
        return DistributorModel.create(distributor);
    }

    function fetchDistributors() {
        return DistributorModel.find({})
            .exec();
    }

    function fetchDistributorById(distributorId) {
        return DistributorModel.findById(distributorId)
            .exec();
    }

    function updateDistributor(distributorId, distributor) {
        return DistributorModel
            .findByIdAndUpdate(distributorId, distributor, {new: true})
            .exec();
    }

    function deleteDistributor(distributorId) {
        return DistributorModel
            .findByIdAndRemove(distributorId)
            .exec();
    }
})();