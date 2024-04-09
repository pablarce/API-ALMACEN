(function () {
  "use strict";

  module.exports = {
    createEmployee: createEmployee,
    fetchEmployees: fetchEmployees,
    fetchEmployeeById: fetchEmployeeById,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee,
  };

  var EmployeeModel = require("./employees.module")().EmployeeModel;

  function createEmployee(employee) {
    return EmployeeModel.create(employee);
  }

  function fetchEmployees() {
    return EmployeeModel.find({}).exec();
  }

  function fetchEmployeeById(employeeId) {
    return EmployeeModel.findById(employeeId).exec();
  }

  function updateEmployee(employeeId, employee) {
    return EmployeeModel.findByIdAndUpdate(employeeId, employee, {
      new: true,
    }).exec();
  }

  function deleteEmployee(employeeId) {
    return EmployeeModel.findByIdAndRemove(employeeId).exec();
  }
})();
