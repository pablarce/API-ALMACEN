const salesData = [
  {
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
  // Nuevas ventas
  {
    clientId: 2468,
    employeeId: 104,
    items: [
      { productId: 207, amount: 2 },
      { productId: 208, amount: 2 },
    ],
    totalCost: 600,
    date: new Date("2024-04-10"),
    paymentMethod: "creditCard",
    status: "done",
  },
  {
    clientId: 1357,
    employeeId: 105,
    items: [
      { productId: 209, amount: 3 },
      { productId: 210, amount: 1 },
    ],
    totalCost: 450,
    date: new Date("2024-04-15"),
    paymentMethod: "cash",
    status: "pending",
  },
  {
    clientId: 7777,
    employeeId: 106,
    items: [
      { productId: 211, amount: 1 },
      { productId: 212, amount: 5 },
    ],
    totalCost: 820,
    date: new Date("2024-04-03"),
    paymentMethod: "creditCard",
    status: "done",
  },
  {
    clientId: 8888,
    employeeId: 107,
    items: [
      { productId: 213, amount: 4 },
      { productId: 214, amount: 2 },
    ],
    totalCost: 680,
    date: new Date("2024-04-08"),
    paymentMethod: "cash",
    status: "done",
  },
  {
    clientId: 6666,
    employeeId: 108,
    items: [
      { productId: 215, amount: 2 },
      { productId: 216, amount: 3 },
    ],
    totalCost: 570,
    date: new Date("2024-04-12"),
    paymentMethod: "creditCard",
    status: "pending",
  },
  {
    clientId: 1111,
    employeeId: 109,
    items: [
      { productId: 217, amount: 1 },
      { productId: 218, amount: 1 },
    ],
    totalCost: 250,
    date: new Date("2024-04-18"),
    paymentMethod: "cash",
    status: "done",
  },
  {
    clientId: 2222,
    employeeId: 110,
    items: [
      { productId: 219, amount: 3 },
      { productId: 220, amount: 2 },
    ],
    totalCost: 690,
    date: new Date("2024-04-22"),
    paymentMethod: "creditCard",
    status: "pending",
  },
];

module.exports = salesData;
