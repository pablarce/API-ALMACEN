const purchasesData = [
    {
      purchaseId: 1,
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
      purchaseId: 2,
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
      purchaseId: 3,
      clientId: 9999,
      supplierId: 8888,
      items: [
        { productId: 105, amount: 1 },
        { productId: 106, amount: 2 },
      ],
      totalCost: 180,
      purchaseDate: new Date("2024-04-05"),
    },
  ];
  
  module.exports = purchasesData;
  