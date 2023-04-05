function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is on!");
    this.isOnOff = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is off!");
    this.isOnOff = false;
};

// Прибор 1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isOnOff = true;
}

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isOnOff = false;
}

Computer.prototype = new ElectricalAppliance();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Samsung", 7, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "AMD", 150, "stationary", "work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)