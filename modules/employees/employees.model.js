(function () {
  var mongoose = require("mongoose");

  var Schema = mongoose.Schema;

  var EmployeeSchema = new Schema({
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
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    hireDate: {
      type: Date,
      required: true,
    },
    workingHours: String,
    salary: {
      type: Number,
      required: true,
    },
    contractType: String,
    education: [String],
  });

  module.exports = mongoose.model("employees", EmployeeSchema);
})();
