// insertClients.js

const mongoose = require("mongoose");
const Client = require("./modules/clients/clients.model");
const clientsData = require("./Data/ClientsData");

const Sale = require("./modules/sales/sales.model");
const salesData = require("./Data/SalesData");

const Purchase = require("./modules/purchases/purchases.model");
const purchaseData = require("./Data/PurchasesData");

const Supplier = require("./modules/suppliers/suppliers.model");
const suppliersData = require("./Data/SuppliersData");

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
    // Insertar los datos de los clientes en la base de datos
    await Client.insertMany(clientsData);


    console.log("Client data inserted into the database successfully!");
  } catch (error) {
    console.error("Error inserting client data into the database:", error);
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
      console.log("Database is empty, inserting client data...");
      await insertData();
    } else {
      console.log("Database is not empty, skipping client data insertion.");
    }
  } catch (error) {
    console.error("Error checking database status:", error);
  }
}

// Exportar el método insertDataAtStart
module.exports = insertDataAtStart;
