const mongoose = require("mongoose");
const Client = require("./modules/clients/clients.model");
const clientsData = require("./data/ClientsData");

const User = require("./modules/user/user.model");
const usersData = require("./data/usersData");

const Employee = require("./modules/employees/employees.model");
const employeesData = require("./data/EmployeesData");

const Sale = require("./modules/sale/sale.model");
const salesData = require("./data/SalesData");

const Purchase = require("./modules/purchase/purchase.model");
const purchasesData = require("./data/PurchasesData");

const Supplier = require("./modules/supplier/supplier.model");
const suppliersData = require("./data/SuppliersData");

const Distributor = require("./modules/distributor/distributor.model");
const distributorData = require("./data/distributorData");

const Equipment = require("./modules/equipment/equipment.model");
const equipmentData = require("./data/equipmentData");

const Warehouse = require("./modules/warehouse/warehouse.model");
const warehouseData = require("./data/warehouseData");

const Product = require("./modules/product/product.model");
const productData = require("./data/ProductData");

// Conectar a la base de datos MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/API-ALMACEN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Función para verificar si la base de datos está vacía
async function isDatabaseEmpty() {
  const count = await Client.countDocuments();
  return count === 0;
}

async function insertData() {
  try {
    // Insertar datos de warehouses
    Object.keys(query.warehouses).forEach(key => {
      let warehouseData = query.warehouses[key];
      let warehouse = new Warehouse({
          name: warehouseData.name,
          location: warehouseData.location,
          capacity: warehouseData.capacity,
          products: warehouseData.products
      });

      warehouse.save().then(() => {
          console.log("Warehouse data inserted successfully!");
      }).catch((err) => {
          console.log(err);
      });
  });

  // Insertar datos de equipments
  Object.keys(query.equipments).forEach(key => {
      let equipmentData = query.equipments[key];
      let equipment = new Equipment({
          name: equipmentData.name,
          description: equipmentData.description,
          quantity: equipmentData.quantity,
          warehouse: equipmentData.warehouse
      });

      equipment.save().then(() => {
          console.log("Equipment data inserted successfully!");
      }).catch((err) => {
          console.log(err);
      });
  });

  // Insertar datos de distrinutors
  Object.keys(query.distributors).forEach(key => {
      let distributorData = query.distributors[key];
      let distributor = new Distributor({
          name: distributorData.name,
          location: distributorData.location,
          products: distributorData.products
      });

      distributor.save().then(() => {
          console.log("Distributor data inserted successfully!");
      }).catch((err) => {
          console.log(err);
      });
  });

  } catch (error) {
    console.error("Error inserting test data into the database:", error);
  } finally {
    // Desconectar de la base de datos al finalizar
    mongoose.disconnect();
  }
}

// Método para insertar los datos de los clientes al inicio si la base de datos está vacía
async function insertDataAtStart() {
  try {
    const isEmpty = await isDatabaseEmpty();
    if (isEmpty) {
      console.log("Database is empty, inserting test data...");
      await insertData();
    } else {
      console.log("Database is not empty, skipping test data insertion.");
    }
  } catch (error) {
    console.error("Error checking database status:", error);
  }
}

module.exports = insertDataAtStart;
