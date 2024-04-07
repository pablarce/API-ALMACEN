(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

  var ClientSchema = new Schema({
    CompanyName: {
      type: String,
      required: true,
    },
    ContactPerson: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    ClientType: {
      type: String,
      enum: ["Individual", "Organization", "Affiliate"],
      default: "Individual",
      required: true,
    },
    RegistrationDate: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("Client", ClientSchema);
})();
