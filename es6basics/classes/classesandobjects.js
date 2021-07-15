// Classes and Objects

// objects with streamlined functions
const myCat = {
    name: "Fluffy",
    meow(times) {
        for (let i = 0; i < times; i++) {
            console.log("meow!");
        }
    }
};

myCat.meow(5); // prints meow! 5 times.

// Classes

class Animal {
    // constructor
    constructor(name, type) {
        this.name = name;
        this.animalType = type;
    }

    sayHello() {
        console.log(`Hi, my name is ${this.name} and I'm a ${this.animalType}!`);
    }
}

// object initialization
const myOtherCat = new Animal("Abby", "cat");
myOtherCat.sayHello(); // outputs "Hi, my name is Abby and I'm a cat!"


// classes with getters and setters (variables)
class Rectangle {
    constructor(length, height) {
        this._length = length;
        this._height = height;
    }

    area() {
        return this._length * this._height;
    }

    get length() {
        return this._length;
    }
    
    set length(l) {
        this._length = l;
    }

    get height() {
        return this._height;
    }

    set height(h) {
        this._height = h;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area()); // prints 50
rect.height = 20;
rect.length = 2;
console.log(rect.area()); // prints 40