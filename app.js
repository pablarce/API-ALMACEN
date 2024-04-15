var createError = require("http-errors");
const cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
app.use(cors());

var MongoDBUtil = require("./modules/mongodb/mongodb.module").MongoDBUtil;
var UserController = require("./modules/user/user.module")().UserController;
var ClientController = require("./modules/clients/clients.module")()
  .ClientController;
var PurchaseController = require("./modules/purchase/purchase.module")()
  .PurchaseController;
var SaleController = require("./modules/sale/sale.module")().SaleController;
var SupplierController = require("./modules/supplier/supplier.module")()
  .SupplierController;
var DistributorController =
  require("./modules/distributor/distributor.module")().DistributorController;
var EquipmentController = require("./modules/equipment/equipment.module")()
  .EquipmentController;
var WarehouseController = require("./modules/warehouse/warehouse.module")()
  .WarehouseController;
var EmployeeController = require("./modules/employees/employees.module")()
  .EmployeeController;
var ProductController = require("./modules/product/product.module")()
  .ProductController;

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");

MongoDBUtil.init();

const insertDataAtStart = require("./InsertData");
insertDataAtStart();

app.use("/users", UserController);
app.use("/purchases", PurchaseController);
app.use("/sales", SaleController);
app.use("/suppliers", SupplierController);
app.use("/clients", ClientController);
app.use("/distributors", DistributorController);
app.use("/equipments", EquipmentController);
app.use("/warehouses", WarehouseController);
app.use("/employees", EmployeeController);
app.use("/products", ProductController);

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
