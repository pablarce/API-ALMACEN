var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["client", "employee"],
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: String,
});

// Antes de guardar el usuario, hashea la contraseña si es nueva o ha sido modificada
UserSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  // Genera un salt para hashear la contraseña
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // Hashea la contraseña utilizando el salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // Reemplaza la contraseña sin hashear con la contraseña hasheada
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
