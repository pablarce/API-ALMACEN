(function () {
  "use strict";

  module.exports = {
    createUser: createUser,
    fetchUsers: fetchUsers,
    fetchUserById: fetchUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    authenticateUser: authenticateUser,
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
      // Buscar el usuario por nombre de usuario
      const user = await UserModel.findOne({ username })
        .select("+password")
        .exec();

      if (!user) {
        // El usuario no fue encontrado
        return null;
      }

      // Comparar la contraseña proporcionada con la contraseña almacenada
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        // La contraseña no coincide
        return null;
      }

      // Devolver el usuario encontrado
      return user;
    } catch (error) {
      // Manejar cualquier error de la base de datos
      throw new Error("Authentication failed");
    }
  }

  function deleteUser(userId) {
    return UserModel.findByIdAndRemove(userId).exec();
  }
})();
