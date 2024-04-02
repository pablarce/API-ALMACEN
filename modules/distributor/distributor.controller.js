(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var DistributorMiddleware = require('./distributor.module')().DistributorMiddleware;

    router.post('/',
        DistributorMiddleware.addDistributor,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        DistributorMiddleware.getDistributors,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:distributorId',
        DistributorMiddleware.getDistributorById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:DistributorId',
        DistributorMiddleware.modifyDistributor,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:DistributorId',
        DistributorMiddleware.removeDistributor,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
