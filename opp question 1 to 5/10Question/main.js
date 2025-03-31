
class Vehicle {
    constructor(brand, model, year) 
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        document.writeln("Brand",this.brand + "mpodel",this.model+ "Year",this.year)
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }
}

class VehicleFactory {
    static createVehicle(type, brand, model, year, extraFeature) {
        if (type.toLowerCase() === "car") {
            return new Car(brand, model, year, extraFeature);
        } else if (type.toLowerCase() === "bike") {
            return new Bike(brand, model, year, extraFeature);
        } else {
            throw new Error("Invalid vehicle type");
        }
    }
}

const car = VehicleFactory.createVehicle("car" , "Toyota" , "Corolla", 2023, 4 ," ");
document.writeln("<hr>")
car.displayInfo();
document.writeln("<hr>")
document.writeln("<br>")
const bike = VehicleFactory.createVehicle("bike" , "Yamaha" , "YZF-R3", 2022, " ");
bike.displayInfo();
document.writeln("<hr>")

