// Родительская функция
function ElectricalDevice(powerConsumption) {
  this.powerConsumption = powerConsumption;
  this.isConnected = false;
}

ElectricalDevice.prototype.connect = function () {
  this.isConnected = true;
  console.log("Прибор подключен к розетке.");
};

ElectricalDevice.prototype.disconnect = function () {
  this.isConnected = false;
  console.log("Прибор отключен от розетки.");
};

// Настольная лампа
function DeskLamp(powerConsumption, color) {
  ElectricalDevice.call(this, powerConsumption);
  this.color = color;
}

DeskLamp.prototype = Object.create(ElectricalDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.changeColor = function (newColor) {
  this.color = newColor;
  console.log(`Цвет лампы изменен на ${newColor}.`);
};

// Компьютер
function Computer(powerConsumption, brand) {
  ElectricalDevice.call(this, powerConsumption);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.showBrand = function () {
  console.log(`Бренд компьютера: ${this.brand}.`);
};

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
