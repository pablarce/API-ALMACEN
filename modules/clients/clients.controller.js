(function () {
  "use strict";

  var express = require("express");
  var router = express.Router();

  var ClientMiddleware = require("./clients.module")().ClientMiddleware;

  router.post("/", ClientMiddleware.addClient, function (req, res) {
    res.status(201).json(req.response);
  });

  router.get("/", ClientMiddleware.getClients, function (req, res) {
    res.status(200).json(req.response);
  });

  router.get("/:clientId", ClientMiddleware.getClientById, function (req, res) {
    res.status(200).json(req.response);
  });

  router.put("/:clientId", ClientMiddleware.modifyClient, function (req, res) {
    res.status(200).json(req.response);
  });

  router.delete(
    "/:clientId",
    ClientMiddleware.removeClient,
    function (req, res) {
      res.status(200).json(req.response);
    }
  );

  module.exports = router;
})();
