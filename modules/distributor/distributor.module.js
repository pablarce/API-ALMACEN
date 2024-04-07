(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            DistributorController: require('./distributor.controller'),
            DistributorMiddleware: require('./distributor.middleware'),
            DistributorService: require('./distributor.service'),
            DistributorModel: require('./distributor.model')
        }
    }

})();