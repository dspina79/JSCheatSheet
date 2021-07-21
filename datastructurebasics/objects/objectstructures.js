// Objects use key:value notation

const simplePerson = {
    firstName: "Brenda",
    lastName: "Sheridan",
    age: 28
};

// use dot or bracket notation to get/set variables
console.log(simplePerson['firstName']); // outputs Brenda
console.log(simplePerson.firstName); // outputs Brenda

// changing values for both
simplePerson['age'] = 30;
simplePerson.lastName = 'Williams';

// more complex objects can have nested properties

const complexPerson = {
    name: {
        firstName: "Jessica",
        lastName: "Minelli",
        middleName: "Ann"
    },
    email: "jessica9393@nowhere.net",
    address: {
        street: {
            number: 39,
            name: "Terrace Drive"
        },
        city: "Rochester",
        state: "NY",
        postalCode: "14662"
    }
};

console.log(complexPerson.address.street.number); // outputs 39

// set new value
complexPerson.address.street.number = 76;
console.log(complexPerson.address.street.number); // outputs 76

// Delete Keyword
// Using the delete keyword removes a property
console.log(simplePerson);
/* 
Outputs
=======
{ firstName: 'Brenda', lastName: 'Williams', age: 30 }
*/

delete simplePerson.age; // removes the age property

console.log(simplePerson);
/* 
Outputs
=======
{ firstName: 'Brenda', lastName: 'Williams' }
*/
