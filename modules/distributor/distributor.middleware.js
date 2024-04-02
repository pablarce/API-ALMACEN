(function () {
    'use strict';

    module.exports = {
        addDistributor: addDistributor,
        getDistributors: getDistributors,
        getDistributorsById: getDistributorsById,
        modifyDistributor: modifyDistributor,
        removeDistributor: removeDistributor
    };
   
    var DistributorService = require('./distributor.module')().DistributorService;

    function addDistributor(req, res, next) {
        DistributorService.createDistributor(req.body)
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

    function getDistributors(req, res, next) {

        DistributorService.fetchDistributors()
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

    function getDistributorById(req, res, next) {

        DistributorService.fetchDistributorById(req.params.distributorId)
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

function modifyDistributor(req, res, next) {
        DistributorService.updateDistributor(req.params.distributorId, req.body)
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

    function removeDistributor(req, res, next) {

        DistributorService.deleteDistributor(req.params.distributorId)
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
