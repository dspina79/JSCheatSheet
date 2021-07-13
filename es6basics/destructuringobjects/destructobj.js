// Destructuring Objects
// using syntax to capture properties of objects

// example object
const myPerson = {
    firstName: "Dean",
    lastName: "Smith",
    streetAddress: "123 Anywhere Drive",
    city: "Mobile",
    state: "AL",
    age: 25
};

// old way
var personFirstName = myPerson.firstName;
var personLastName = myPerson.lastName;

// new way - destructuring
var {firstName, lastName} = myPerson;
console.log(firstName); // outputs "Dean"
console.log(lastName); // outputs "Smith"


// destructuring with different local variable names
const myCat = {
    name: "Fluffy",
    type: "American Shorthair",
    favoriteFood: "wet food"
};

// format: {objectKey: localVar} = object

const {name: catName, type: catType} = myCat;
console.log(catName); // outputs "Fluffy"
console.log(catType); // outputs "American Shorthair"