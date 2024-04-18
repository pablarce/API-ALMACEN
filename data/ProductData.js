const productData = [
  {
    product_name: "Samsung Galaxy S20",
    stock: 75,
    price: 899.99,
    type: "Electronics",
    description:
      "Samsung Galaxy S20 smartphone with a 6.2-inch display, 128GB storage, and 12MP camera.",
  },
  {
    product_name: "Apple MacBook Pro",
    stock: 30,
    price: 1499.99,
    type: "Electronics",
    description:
      "Apple MacBook Pro laptop with Retina display, Intel Core i7 processor, and 512GB SSD.",
  },
  {
    product_name: "Canon EOS Rebel T7i",
    stock: 20,
    price: 699.99,
    type: "Electronics",
    description:
      "Canon EOS Rebel T7i DSLR camera with 24.2MP CMOS sensor and Full HD video recording.",
  },
  {
    product_name: "Sony WH-1000XM4",
    stock: 50,
    price: 349.99,
    type: "Electronics",
    description:
      "Sony WH-1000XM4 wireless noise-canceling headphones with up to 30 hours of battery life.",
  },
  {
    product_name: "Adidas Ultraboost 21",
    stock: 80,
    price: 179.99,
    type: "Footwear",
    description:
      "Adidas Ultraboost 21 running shoes with Boost cushioning technology for responsive comfort.",
  },
  {
    product_name: "Dell XPS 15",
    stock: 25,
    price: 1699.99,
    type: "Electronics",
    description:
      "Dell XPS 15 laptop with InfinityEdge display, Intel Core i9 processor, and NVIDIA GTX graphics.",
  },
  {
    product_name: "Nintendo Switch",
    stock: 60,
    price: 299.99,
    type: "Electronics",
    description:
      "Nintendo Switch gaming console with handheld and docked modes for versatile gaming experiences.",
  },
  {
    product_name: "KitchenAid Stand Mixer",
    stock: 40,
    price: 349.99,
    type: "Kitchen Appliances",
    description:
      "KitchenAid Stand Mixer with 5-quart stainless steel bowl and 10-speed settings for versatile baking.",
  },
  {
    product_name: "GoPro HERO9 Black",
    stock: 15,
    price: 449.99,
    type: "Electronics",
    description:
      "GoPro HERO9 Black action camera with 5K video recording and HyperSmooth 3.0 stabilization.",
  },
  {
    product_name: "Amazon Echo Dot (4th Gen)",
    stock: 90,
    price: 49.99,
    type: "Electronics",
    description:
      "Amazon Echo Dot (4th Gen) smart speaker with Alexa voice control and improved sound quality.",
  },
  {
    product_name: "LG OLED TV",
    stock: 20,
    price: 1999.99,
    type: "Electronics",
    description:
      "LG OLED TV with 4K resolution, HDR, and Smart TV capabilities for immersive entertainment.",
  },
  {
    product_name: "Bose QuietComfort Earbuds",
    stock: 40,
    price: 299.99,
    type: "Electronics",
    description:
      "Bose QuietComfort Earbuds with noise-canceling technology and up to 6 hours of battery life.",
  },
  {
    product_name: "Microsoft Surface Pro 7",
    stock: 35,
    price: 1299.99,
    type: "Electronics",
    description:
      "Microsoft Surface Pro 7 tablet with detachable keyboard, Intel Core i5 processor, and Windows 10 OS.",
  },
  {
    product_name: "Samsung QLED Q80T TV",
    stock: 15,
    price: 1599.99,
    type: "Electronics",
    description:
      "Samsung QLED Q80T TV with Quantum Dot technology, 4K resolution, and Object Tracking Sound.",
  },
  {
    product_name: "Apple AirPods Pro",
    stock: 50,
    price: 249.99,
    type: "Electronics",
    description:
      "Apple AirPods Pro with active noise cancellation, transparency mode, and customizable fit.",
  },
  {
    product_name: "iRobot Roomba i7+",
    stock: 25,
    price: 799.99,
    type: "Electronics",
    description:
      "iRobot Roomba i7+ robot vacuum with automatic dirt disposal, smart mapping, and Alexa integration.",
  },
  {
    product_name: "Dyson V11 Absolute",
    stock: 30,
    price: 599.99,
    type: "Electronics",
    description:
      "Dyson V11 Absolute cordless vacuum cleaner with powerful suction, intelligent cleaning modes, and LCD screen.",
  },
  {
    product_name: "Ninja Foodi Deluxe",
    stock: 20,
    price: 299.99,
    type: "Electronics",
    description:
      "Ninja Foodi Deluxe pressure cooker and air fryer with multiple cooking functions and TenderCrisp technology.",
  },
  {
    product_name: "Ecovacs Deebot N79S",
    stock: 35,
    price: 199.99,
    type: "Electronics",
    description:
      "Ecovacs Deebot N79S robot vacuum cleaner with smart navigation, multiple cleaning modes, and app control.",
  },
  {
    product_name: "Instant Pot Duo Evo Plus",
    stock: 30,
    price: 129.99,
    type: "Electronics",
    description:
      "Instant Pot Duo Evo Plus electric pressure cooker with 10-in-1 cooking functions and easy-to-use controls.",
  },
  {
    product_name: "One Hundred Years of Solitude",
    stock: 50,
    price: 15.99,
    type: "Books",
    description:
      "One Hundred Years of Solitude is a novel by Colombian writer Gabriel García Márquez, first published in 1967.",
  },
  {
    product_name: "The Little Prince",
    stock: 40,
    price: 12.99,
    type: "Books",
    description:
      "The Little Prince is a novella and the most famous work of French writer Antoine de Saint-Exupéry.",
  },
  {
    product_name: "Harry Potter and the Philosopher's Stone",
    stock: 60,
    price: 17.99,
    type: "Books",
    description:
      "Harry Potter and the Philosopher's Stone is the first book in the Harry Potter series, written by J.K. Rowling.",
  },
  {
    product_name: "1984",
    stock: 30,
    price: 14.99,
    type: "Books",
    description:
      "1984 is a dystopian political fiction novel by British writer George Orwell, published in 1949.",
  },
  {
    product_name: "The Da Vinci Code",
    stock: 45,
    price: 16.99,
    type: "Books",
    description:
      "The Da Vinci Code is a mystery thriller novel by Dan Brown, published in 2003.",
  },
  {
    product_name: "Nike Air Zoom Pegasus 38",
    stock: 80,
    price: 119.99,
    type: "Sport",
    description:
      "Nike Air Zoom Pegasus 38 running shoes with responsive cushioning and durable construction for long-distance running.",
  },
  {
    product_name: "Wilson NFL Super Grip Football",
    stock: 50,
    price: 19.99,
    type: "Sport",
    description:
      "Wilson NFL Super Grip Football with enhanced grip and durability, suitable for casual and competitive play.",
  },
  {
    product_name: "Yonex Arcsaber 11 Badminton Racket",
    stock: 20,
    price: 149.99,
    type: "Sport",
    description:
      "Yonex Arcsaber 11 Badminton Racket designed for advanced players seeking precision and control in their shots.",
  },
  {
    product_name: "Adidas Predator Freak.1 Firm Ground Cleats",
    stock: 30,
    price: 199.99,
    type: "Sport",
    description:
      "Adidas Predator Freak.1 Firm Ground Cleats designed for soccer players with enhanced ball control and traction on firm ground surfaces.",
  },
  {
    product_name: "Garmin Forerunner 945 GPS Running Watch",
    stock: 35,
    price: 549.99,
    type: "Sport",
    description:
      "Garmin Forerunner 945 GPS Running Watch with advanced training features and performance metrics for runners and triathletes.",
  },
  {
    product_name: "IKEA Hemnes Bed Frame",
    stock: 20,
    price: 299.99,
    type: "Furniture",
    description:
      "IKEA Hemnes Bed Frame with solid wood construction and timeless design, available in various sizes.",
  },
  {
    product_name: "Ashley Furniture Signature Design - Larkinhurst Sofa",
    stock: 15,
    price: 599.99,
    type: "Furniture",
    description:
      "Ashley Furniture Signature Design - Larkinhurst Sofa with classic rolled arms and faux leather upholstery, perfect for any living room.",
  },
  {
    product_name: "Zinus Modern Studio Collection TV Media Stand",
    stock: 25,
    price: 89.99,
    type: "Furniture",
    description:
      "Zinus Modern Studio Collection TV Media Stand with steel frame and stylish design, suitable for TVs up to 48 inches.",
  },
  {
    product_name: "Walker Edison Furniture Company Wood Dining Table",
    stock: 10,
    price: 249.99,
    type: "Furniture",
    description:
      "Walker Edison Furniture Company Wood Dining Table with solid wood construction and modern farmhouse style, perfect for family gatherings.",
  },
  {
    product_name: "Furinno Turn-N-Tube 5-Tier Corner Display Rack",
    stock: 30,
    price: 39.99,
    type: "Furniture",
    description:
      "Furinno Turn-N-Tube 5-Tier Corner Display Rack with open shelf design and easy assembly, ideal for displaying books, plants, or decorative items.",
  },
  {
    product_name: "Instant Pot Duo Evo Plus",
    stock: 30,
    price: 129.99,
    type: "Kitchen Appliances",
    description:
      "Instant Pot Duo Evo Plus electric pressure cooker with 10-in-1 cooking functions and easy-to-use controls.",
  },
  {
    product_name: "Ninja Mega Kitchen System Blender",
    stock: 25,
    price: 199.99,
    type: "Kitchen Appliances",
    description:
      "Ninja Mega Kitchen System Blender with powerful 1500-watt motor and Total Crushing Technology, perfect for blending, chopping, and smoothie making.",
  },
  {
    product_name: "Keurig K-Elite Coffee Maker",
    stock: 40,
    price: 129.99,
    type: "Kitchen Appliances",
    description:
      "Keurig K-Elite Coffee Maker with programmable features and strong brew option, compatible with K-Cup pods for convenient coffee brewing.",
  },
  {
    product_name: "Cuisinart TOA-60 Convection Toaster Oven Airfryer",
    stock: 20,
    price: 199.99,
    type: "Kitchen Appliances",
    description:
      "Cuisinart TOA-60 Convection Toaster Oven Airfryer with versatile cooking functions including air frying, baking, broiling, and toasting.",
  },
  {
    product_name: "KitchenAid Artisan Stand Mixer",
    stock: 15,
    price: 379.99,
    type: "Kitchen Appliances",
    description:
      "KitchenAid Artisan Stand Mixer with 5-quart stainless steel bowl and 10-speed settings, perfect for baking and mixing.",
  }
];

module.exports = productData;