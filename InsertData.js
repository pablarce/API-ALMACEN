const mongoose = require("mongoose");
const Client = require("./modules/clients/clients.model");
const User = require("./modules/user/user.model");

const clientsData = require("./data/ClientsData");
const usersData = require("./data/usersData");

const Sale = require("./modules/sale/sale.model");
const salesData = require("./data/SalesData");

const Purchase = require("./modules/purchase/purchase.model");
const purchasesData = require("./data/PurchasesData");

const Supplier = require("./modules/supplier/supplier.model");
const suppliersData = require("./data/SuppliersData");

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

// Método para insertar los datos de los clientes en la base de datos
async function insertData() {
  try {
    // Insertar los datos test en la base de datos
    await Client.insertMany(clientsData);
    await Sale.insertMany(salesData);
    await Supplier.insertMany(suppliersData);
    await Purchase.insertMany(purchasesData);
    await User.insertMany(usersData);
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
