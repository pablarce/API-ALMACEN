(function () {
  "use strict";

  var express = require("express");
  var router = express.Router();

  var EmployeeMiddleware = require("./employees.module")().EmployeeMiddleware;

  router.post("/", EmployeeMiddleware.addEmployee, function (req, res) {
    res.status(201).json(req.response);
  });

  router.get("/", EmployeeMiddleware.getEmployees, function (req, res) {
    res.status(200).json(req.response);
  });

  router.get(
    "/:employeeId",
    EmployeeMiddleware.getEmployeeById,
    function (req, res) {
      res.status(200).json(req.response);
    }
  );

  router.put(
    "/:employeeId",
    EmployeeMiddleware.modifyEmployee,
    function (req, res) {
      res.status(200).json(req.response);
    }
  );

  router.delete(
    "/:employeeId",
    EmployeeMiddleware.removeEmployee,
    function (req, res) {
      res.status(200).json(req.response);
    }
  );

  module.exports = router;
})();
