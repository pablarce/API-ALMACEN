(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            EquipmentController: require('./equipment.controller'),
            EquipmentMiddleware: require('./equipment.middleware'),
            EquipmentService: require('./equipment.service'),
            EquipmentModel: require('./equipment.model')
        }
    }

})();