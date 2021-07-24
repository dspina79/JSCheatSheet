// Basic Object Oriented Programming

/*
    Note:   This section does not cover use of ES6 classes.
            Rather, this will cover OOP concepts that are 
            managed through JavaScript functions and prototyping.
*/

// Building an instance using a function
// the function can hold its own properties

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

// create instances of the Animal using the constructor
// generated from the function's signature

const cat = new Animal('Sebastian', 4);
const dog = new Animal('Parker', 3);

// accessing the properties using dot donation
console.log(`The cat's name is ${cat.name}`); // outputs "The cat's name is Sebastian"
console.log(`The dog's age is ${dog.age}`); // outputs "The dog's age is 3"

// checking whether a variable implements the definition using instanceof
// format: variable instanceof class returns true/false
const oddNumber = 13;

console.log(cat instanceof Animal); // outputs true
console.log(dog instanceof Animal); // outputs true
console.log(oddNumber instanceof Animal); // outputs false