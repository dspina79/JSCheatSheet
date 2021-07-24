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

// checking for properties using hasOwnProperty
// if a variable does not have the property, the method returns false
const testProperties = ["name", "age", "weight"];
for (let prop of testProperties) {
    console.log(`Testing property '${prop}'`);
    if (cat.hasOwnProperty(prop)) {
        console.log('The cat has that property');
    } else {
        console.log('The cat does not have the property.');
    }
}

/*
Outputs
=======
Testing property 'name'
The cat has that property
Testing property 'age'
The cat has that property
Testing property 'weight'
The cat does not have the property.
*/

// Adding Properties to Instances
// simply adding a new property to an **instance** just
// requires simple dot notation

cat.furColor = 'black';
console.log(`The cat, ${cat.name}, has ${cat.furColor} fur.`);
// ^^^ outputs "The cat, Sebastian, has black fur.""
console.log(cat.hasOwnProperty('furColor')); // outputs true
console.log(dog.hasOwnProperty('furCOlor')); // outputs false

// Iterating Over Properties
// using for..in, each property can be isolated

for (let prop in cat) {
    if (cat.hasOwnProperty(prop)) {
        console.log(`cat.${prop} is present.`)
    } else {
        console.log(`cat.${prop} is not present.`)
    }
}

/*
Outputs
=======
cat.name is present.
cat.age is present.
cat.furColor is present.
*/