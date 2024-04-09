(function () {
  "use strict";

  var Client = require("./clients.model");

  module.exports = {
    addClient: addClient,
    getClients: getClients,
    getClientById: getClientById,
    modifyClient: modifyClient,
    removeClient: removeClient,
  };

  function addClient(req, res, next) {
    Client.create(req.body).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(error) {
      next(error);
    }
  }

  function getClients(req, res, next) {
    Client.find({}).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(err) {
      next(err);
    }
  }

  function getClientById(req, res, next) {
    Client.findById(req.params.clientId).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(err) {
      next(err);
    }
  }

  function modifyClient(req, res, next) {
    Client.findByIdAndUpdate(req.params.clientId, req.body, { new: true })
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

  function removeClient(req, res, next) {
    Client.findByIdAndDelete(req.params.clientId).then(success).catch(error);

    function success(data) {
      req.response = data;
      next();
    }

    function error(err) {
      next(err);
    }
  }
})();
