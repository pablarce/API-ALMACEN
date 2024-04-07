// insertClients.js

const mongoose = require("mongoose");
const Client = require("./modules/clients/clients.model");
const clientsData = require("./Data/ClientsData");

// Conectar a la base de datos MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/API-ALMACEN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Función para insertar los datos de los clientes en la base de datos
async function insertClients() {
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

// Ejecutar la función para insertar los datos de los clientes
insertClients();
