var bcrypt = require("bcrypt");

(function () {
  "use strict";

  module.exports = {
    createUser: createUser,
    fetchUsers: fetchUsers,
    fetchUserById: fetchUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    authenticateUser: authenticateUser,
    registerUser: registerUser,
  };

  var UserModel = require("./user.module")().UserModel;
  function createUser(user) {
    return UserModel.create(user);
  }

  function fetchUsers() {
    return UserModel.find({}).exec();
  }

  function fetchUserById(userId) {
    return UserModel.findById(userId).exec();
  }

  function updateUser(userId, user) {
    return UserModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  }

  async function authenticateUser(username, password) {
    try {
      const user = await UserModel.findOne({ username })
        .select("+password")
        .exec();

      if (!user) {
        return null;
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return null;
      }

      return user;
    } catch (error) {
      throw new Error("Authentication failed");
    }
  }

  async function registerUser(username, password) {
    try {
      console.log("Iniciando registro de usuario...");

      const firstName = "Pedro";
      const lastName = "Sanchez";
      const role = "employee";
      const randomNumber = Math.floor(Math.random() * 9000) + 1000;
      const email = `pedrito${randomNumber}@gmail.com`;
      const organization = "España";
      const country = "Nueva Zelanda";

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await UserModel.create({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        role,
        email,
        organization,
        country,
      });

      return newUser;
    } catch (error) {
      throw new Error("Error registering user");
    }
  }

  function deleteUser(userId) {
    return UserModel.findByIdAndRemove(userId).exec();
  }
})();
