(function () {
  "use strict";

  module.exports = init;

  function init() {
    return {
      UserController: require("./employees.controller"),
      UserMiddleware: require("./employees.middleware"),
      UserService: require("./employees.service"),
      UserModel: require("./employees.model"),
    };
  }
})();
