(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            DistributorController: require('./userdistributor.controller'),
            DistributorMiddleware: require('./userdistributor.middleware'),
            DistributorService: require('./userdistributor.service'),
            DistributorModel: require('./userdistributor.model')
        }
    }

})();