// Inheritance Using Prototypes

// several key steps need to be used
// for this example, we will create a new Animal type that
// will be the parent for other object types

function Animal(name) {
    this.name = name;
}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log(`${this.name} eats!`);
    },
    sleep: function(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

function Dog(name) {
    this.name = name;
}

function Cat(name) {
    this.name = name;
}

// to inherit, we set the prototype for each new object
// to the Animal using Object.create(...)

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);

// let's test

let fido = new Dog("Fido");
fido.eat();
fido.sleep(10);


// set the constructor
Dog.prototype.constructor = Dog;

// add methods
Dog.prototype.hunt = function() {
    console.log(`${this.name} starts sniffing around.`);
};

// override methods
Dog.prototype.sleep = function(hours) {
    console.log(`${this.name} sleeps with one eye open for ${hours} hours.`);
}

let snuffles = new Dog("Snuffles");
snuffles.eat();
snuffles.sleep(4);
snuffles.hunt();

/*
Outputs
=======
Snuffles eats!
Snuffles sleeps with one eye open for 4 hours.
Snuffles starts sniffing around.
*/
