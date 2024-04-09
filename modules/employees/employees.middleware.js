(function () {
  "use strict";

  module.exports = {
    addEmployee: addEmployee,
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,
    modifyEmployee: modifyEmployee,
    removeEmployee: removeEmployee,
  };

  var EmployeeService = require("./employees.module")().EmployeeService;

  function addEmployee(req, res, next) {
    EmployeeService.createEmployee(req.body).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(error) {
      next(error);
    }
  }

  function getEmployees(req, res, next) {
    EmployeeService.fetchEmployees().then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(err) {
      next(err);
    }
  }

  function getEmployeeById(req, res, next) {
    EmployeeService.fetchEmployeeById(req.params.employeeId)
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

  function modifyEmployee(req, res, next) {
    EmployeeService.updateEmployee(req.params.employeeId, req.body)
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

  function removeEmployee(req, res, next) {
    EmployeeService.deleteEmployee(req.params.employeeId)
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
