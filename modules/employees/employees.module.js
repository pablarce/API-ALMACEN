(function () {
  "use strict";

  module.exports = init;

  function init() {
    return {
      EmployeeController: require("./employees.controller"),
      EmployeeMiddleware: require("./employees.middleware"),
      EmployeeService: require("./employees.service"),
      EmployeeModel: require("./employees.model"),
    };
  }
})();
