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
    Object.keys(query.warehouse).forEach(wkey => {
      console.log(wkey)
      let mywarehouse = new Warehouse({
        _id: new mongoose.Types.ObjectId(),
        ID: query.warehouse[wkey].ID,
        name:query.warehouse[wkey].name,
        location: query.warehouse[wkey].location,
        capacity: query.warehouse[wkey].capacity,
        products: query.warehouse[wkey].products
      });

      warehouse.save().then(() => {
          console.log("Warehouse data inserted successfully!");
      }).catch((err) => {
          console.log(err);
      });
  });

  // Insertar datos de equipment
  Object.keys(query.equipment).forEach(ekey => {
    console.log(ekey)
    let myequipment = new Warehouse({
      _id: new mongoose.Types.ObjectId(),
      ID: query.equipment[ekey].ID,
      name:query.equipment[ekey].name,
      description: query.equipment[ekey].description,
      quantity: query.equipment[ekey].quantity,
      warehouseId: query.equipment[ekey].warehouseId
    });

    equipment.save().then(() => {
      console.log("Equipment data inserted successfully!");
  }).catch((err) => {
      console.log(err);
  });
});

  // Insertar datos de distrinutor
  Object.keys(query.distributor).forEach(dkey => {
    console.log(dkey)
    let mydistributor = new Warehouse({
      _id: new mongoose.Types.ObjectId(),
      ID: query.distributor[dkey].ID,
      name:query.distributor[dkey].name,
      location: query.distributor[dkey].location,
      products: query.distributor[dkey].products
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
