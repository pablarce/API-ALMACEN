(function () {
  "use strict";

  module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    getUserById: getUserById,
    modifyUser: modifyUser,
    removeUser: removeUser,
    authenticateUser: authenticateUser,
  };

  var UserService = require("./user.module")().UserService;

  function addUser(req, res, next) {
    UserService.createUser(req.body).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(error) {
      next(error);
    }
  }

  function getUsers(req, res, next) {
    UserService.fetchUsers().then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(err) {
      next(err);
    }
  }

  function getUserById(req, res, next) {
    UserService.fetchUserById(req.params.userId).then(success).catch(failure);

    function success(data) {
      req.response = data;
      next();
    }

    function failure(err) {
      next(err);
    }
  }

  function modifyUser(req, res, next) {
    UserService.updateUser(req.params.userId, req.body)
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

  function removeUser(req, res, next) {
    UserService.deleteUser(req.params.userId).then(success).catch(error);

    function success(data) {
      req.response = data;
      next();
    }

    function error(err) {
      next(err);
    }
  }

  function authenticateUser(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    UserService.authenticateUser(username, password)
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: "Authentication failed. Invalid username or password",
          });
        }

        // Attach user to request object for use in subsequent middleware
        req.user = user;
        next();
      })
      .catch((error) => {
        next(error);
      });
  }
})();
