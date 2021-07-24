// Adding Properties to the Function Class using Prototyping

function Shape(height, width) {
    this.height = height;
    this.width = width;
}

let square = new Shape(10, 10);

// add the new property
Shape.prototype.depth = 0;

let cube = new Shape(10, 10);
cube.depth = 10;

// check the properties of each
for (let prop in square) {
    if (square.hasOwnProperty(prop)) {
        console.log(`square HAS the ${prop} property.`);
    } else {
        console.log(`square DOES NOT HAVE the ${prop} property.`);
    }
}

for (let prop in cube) {
    if (cube.hasOwnProperty(prop)) {
        console.log(`cube HAS the ${prop} property.`);
    } else {
        console.log(`cube DOES NOT HAVE the ${prop} property.`);
    }
}

/*
Outputs
=======
square HAS the height property.
square HAS the width property.
square DOES NOT HAVE the depth property.
cube HAS the height property.
cube HAS the width property.
cube HAS the depth property.
*/


// Creating New Objects with Prototype
// starting with a constructor
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = email;
}

Person.prototype = {
    age: 0,
    greet: function() {
        return `Hello, my name is ${this.firstName}`;
    },
    birthday: function() {
        this.age++;
    }
}

let jacob = new Person("Jacob", "Smoke", "jake@lostnowhere.net");
jacob.age = 230;
console.log(jacob.greet());
jacob.birthday();
console.log(`${jacob.firstName} ${jacob.lastName} is ${jacob.age} years old.`);

/*
Outputs
=======
Hello, my name is Jacob
Jacob Smoke is 231 years old.
*/

// Constructor Desctruction
// when the prototype is set, the constructor can be destroyed. 
// therefore, when generating the new prototype, set the constructor.

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype = {
    constructor: Book,
    numberPages: 0,
    read: function() {
        console.log(`Currently reading ${this.title} by ${this.author}`);
    }
}

let taleOfTwoCities = new Book("A Tale of Two Cities", "Charles Dickens");
console.log(taleOfTwoCities.constructor === Book); //outputs true
