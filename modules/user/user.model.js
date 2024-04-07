(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

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
      enum: ["client", "administrator"],
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
    country: String,
  });

  module.exports = mongoose.model("users", UserSchema);
})();
