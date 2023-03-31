// Родительский класс
class ElectricalDevice {
  constructor(powerConsumption) {
    this.powerConsumption = powerConsumption;
    this.isConnected = false;
  }

  connect() {
    this.isConnected = true;
    console.log("Прибор подключен к розетке.");
  }

  disconnect() {
    this.isConnected = false;
    console.log("Прибор отключен от розетки.");
  }
}

// Настольная лампа
class DeskLamp extends ElectricalDevice {
  constructor(powerConsumption, color) {
    super(powerConsumption);
    this.color = color;
  }

  changeColor(newColor) {
    this.color = newColor;
    console.log(`Цвет лампы изменен на ${newColor}.`);
  }
}

// Компьютер
class Computer extends ElectricalDevice {
  constructor(powerConsumption, brand) {
    super(powerConsumption);
    this.brand = brand;
  }

  showBrand() {
    console.log(`Бренд компьютера: ${this.brand}.`);
  }
}

// Создание экземпляров
const lamp = new DeskLamp(60, "белый");
const computer = new Computer(400, "Apple");

// Вывод в консоль
lamp.connect();
lamp.changeColor("синий");
lamp.disconnect();

computer.connect();
computer.showBrand();
computer.disconnect();
