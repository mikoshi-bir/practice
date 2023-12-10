class Transport {
  type;
  price;
  brand;
  // { type:, price:, brand: }
  constructor(transportDetails) {
    const { type, price, brand } = transportDetails;
    if (price < 0) {
      throw new Error('Цена ниже 0')
    }
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return [this.type, this.brand].join(" – ");
  }
  getPrice() {
    return this.price;
  }
}

class Car extends Transport {
  doors;
  constructor(carDetails) {
    super(carDetails);
    this.doors = carDetails.doors;
  }

  getInfo() {
    return `Машина: ${super.getInfo()}<br />
    Кол-во дверей: ${this.getDoorsCount()}`;
  }
  getDoorsCount() {
    return this.doors;
  }
}
class Bike extends Transport {
  maxSpeed;
  constructor(bikeDetails) {
    super(bikeDetails);
    this.maxSpeed = bikeDetails.maxSpeed;
  }

  getInfo() {
    return `Байк: ${super.getInfo()}<br />
    Максимальная скорость: ${this.getMaxSpeed()}`;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

const transports = data.map((transport) => {
  if (transport.type === "car") {
    return new Car(transport);
  } else if (transport.type === "bike") {
    return new Bike(transport);
  } else {
    throw new Error("type not found: " + transport.type);
  }
});

console.log(transports.map((d) => d.getInfo()));
for (const transport of transports) {
  const li = document.createElement("li");

  li.innerHTML = transport.getInfo();

  document.getElementById("transports").appendChild(li);
}
