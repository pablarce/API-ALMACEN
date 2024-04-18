const purchasesData = [
  {
    clientId: 1234,
    supplierId: 5678,
    items: [
      { productId: 101, amount: 2 },
      { productId: 102, amount: 1 },
    ],
    totalCost: 350,
    purchaseDate: new Date("2024-04-01"),
  },
  {
    clientId: 5678,
    supplierId: 1234,
    items: [
      { productId: 103, amount: 5 },
      { productId: 104, amount: 3 },
    ],
    totalCost: 620,
    purchaseDate: new Date("2024-03-25"),
  },
  {
    clientId: 9999,
    supplierId: 8888,
    items: [
      { productId: 105, amount: 1 },
      { productId: 106, amount: 2 },
    ],
    totalCost: 180,
    purchaseDate: new Date("2024-04-05"),
  },
  // Nuevas compras
  {
    clientId: 4321,
    supplierId: 8765,
    items: [
      { productId: 107, amount: 3 },
      { productId: 108, amount: 2 },
    ],
    totalCost: 480,
    purchaseDate: new Date("2024-04-10"),
  },
  {
    clientId: 2468,
    supplierId: 1357,
    items: [
      { productId: 109, amount: 4 },
      { productId: 110, amount: 1 },
    ],
    totalCost: 720,
    purchaseDate: new Date("2024-04-15"),
  },
  {
    clientId: 1357,
    supplierId: 9999,
    items: [
      { productId: 111, amount: 2 },
      { productId: 112, amount: 3 },
    ],
    totalCost: 540,
    purchaseDate: new Date("2024-04-03"),
  },
  {
    clientId: 7777,
    supplierId: 3333,
    items: [
      { productId: 113, amount: 3 },
      { productId: 114, amount: 2 },
    ],
    totalCost: 670,
    purchaseDate: new Date("2024-04-08"),
  },
  {
    clientId: 8888,
    supplierId: 4444,
    items: [
      { productId: 115, amount: 1 },
      { productId: 116, amount: 4 },
    ],
    totalCost: 410,
    purchaseDate: new Date("2024-04-12"),
  },
  {
    clientId: 6666,
    supplierId: 2222,
    items: [
      { productId: 117, amount: 2 },
      { productId: 118, amount: 3 },
    ],
    totalCost: 590,
    purchaseDate: new Date("2024-04-20"),
  },
  {
    clientId: 9999,
    supplierId: 4444,
    items: [
      { productId: 119, amount: 1 },
      { productId: 120, amount: 1 },
    ],
    totalCost: 270,
    purchaseDate: new Date("2024-04-22"),
  },
];

module.exports = purchasesData;
