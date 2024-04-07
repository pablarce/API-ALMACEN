(function () {
  "use strict";

  module.exports = {
    createClient: createClient,
    fetchClients: fetchClients,
    fetchClientById: fetchClientById,
    updateClient: updateClient,
    deleteClient: deleteClient,
  };

  var ClientModel = require("./clients.module")().ClientModel;

  function createClient(client) {
    return ClientModel.create(client);
  }

  function fetchClients() {
    return ClientModel.find({}).exec();
  }

  function fetchClientById(clientId) {
    return ClientModel.findById(clientId).exec();
  }

  function updateClient(clientId, client) {
    return ClientModel.findByIdAndUpdate(clientId, client, {
      new: true,
    }).exec();
  }

  function deleteClient(clientId) {
    return ClientModel.findByIdAndRemove(clientId).exec();
  }
})();
