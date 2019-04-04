/*
    Demo of inheritance.
 */ 
var Car = function(first, last, model, engines) {
    this.name = {
        'first': first,
        'last': last
    };

    this.model = model;

    this.engines = engines;
};

Car.prototype.describe = function() {
    let string = "";
    for (let i = 0; i < this.engines.length; i++) {
        if (i === this.engines.length - 1) {
            string += " and " + this.engines[i]; 
        } else {
            string += this.engines[i] + ", ";
        }
        
    }
    alert("The Car is " + this.name.first + " " + this.name.last + ". It has " + string + " engines!");
};

var workCar = new Car('Suzuki', 'Naruto', 'ch-15', ['V4', 'Zh-6', 'GA-2']);

// var workCar1 = Object.create(workCar);

var funCar = new Car('Mazerati', 'Satochi', 'M-15', ['V9', 'Zh-12', 'GA-1', 'F48']);