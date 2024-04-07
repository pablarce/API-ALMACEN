(function () {
  "use strict";

  module.exports = init;

  function init() {
    return {
      ClientController: require("./clients.controller"),
      ClientMiddleware: require("./clients.middleware"),
      ClientService: require("./clients.service"),
      ClientModel: require("./clients.model"),
    };
  }
})();
