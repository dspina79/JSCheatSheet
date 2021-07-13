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