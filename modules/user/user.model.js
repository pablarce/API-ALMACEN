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
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  organization: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  country: String,
});

// Antes de guardar el usuario, hashea la contraseña si es nueva o ha sido modificada
UserSchema.pre("save", async function (next) {
  // Solo hashear la contraseña si ha sido modificada
  if (!this.isModified("password")) return next();

  try {
    // Genera un salt para hashear la contraseña
    const salt = await bcrypt.genSalt(10);

    // Hashea la contraseña utilizando el salt
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Reemplaza la contraseña sin hashear con la contraseña hasheada
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
