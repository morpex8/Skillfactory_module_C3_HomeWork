class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isOnOff = false;
  }
  // метод вкл в розетку
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isOnOff = true;
  }
  
  // метод выкл из розетки
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isOnOff = false;
  }
}

// Прибор лампа
class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isOnOff = true;
  }
}

// Прибор Пк
class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isOnOff = false;
  }
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Samsung", 7, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "AMD", 150, "station", "work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)