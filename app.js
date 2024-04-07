var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

var MongoDBUtil = require("./modules/mongodb/mongodb.module").MongoDBUtil;
var DistributorController = require("./modules/distributor/dustributor.module")().DistributorController;
var EquipmentController = require("./modules/equpment/equipment.module")().EquipmentController;
var WarehouseController = require("./modules/warehouse/warehouse.module")().WarehouseController;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");

MongoDBUtil.init();

const insertDataAtStart = require("./InsertData");
insertDataAtStart();

app.use("/distributor", DistributorController);
app.use("/equipment", EquipmentController);
app.use("/warehouse", WarehouseController);

app.get("/", function (req, res) {
  var pkg = require(path.join(__dirname, "package.json"));
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: "up",
  });
});

app.get("/home", function (req, res) {
  res.render("pages/index");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.json({
    message: res.locals.message,
    error: res.locals.error,
  });
});

module.exports = app;