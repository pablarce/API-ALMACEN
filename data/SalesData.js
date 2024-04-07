const salesData = [
    {
      saleId: 1,
      clientId: 1234,
      employeeId: 101,
      items: [
        { productId: 201, amount: 3 },
        { productId: 202, amount: 1 },
      ],
      totalCost: 480,
      date: new Date("2024-04-02"),
      paymentMethod: "cash",
      status: "done",
    },
    {
      saleId: 2,
      clientId: 5678,
      employeeId: 102,
      items: [
        { productId: 203, amount: 2 },
        { productId: 204, amount: 4 },
      ],
      totalCost: 720,
      date: new Date("2024-03-28"),
      paymentMethod: "creditCard",
      status: "done",
    },
    {
      saleId: 3,
      clientId: 9999,
      employeeId: 103,
      items: [
        { productId: 205, amount: 1 },
        { productId: 206, amount: 3 },
      ],
      totalCost: 310,
      date: new Date("2024-04-06"),
      paymentMethod: "cash",
      status: "pending",
    },
  ];
  
  module.exports = salesData;
  