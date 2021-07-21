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


// hasOwnProperty Method
// determines of an objects property exists

console.log(simplePerson.hasOwnProperty('firstName')); // outputs true
console.log(simplePerson.hasOwnProperty('lastName')); // outputs true
console.log(simplePerson.hasOwnProperty('age')); // outputs false


// Using for ... in to Get Properties

const departments = {
    "IT": {
        "numberMembers": 20,
        "formalName" : "Information Technologies",
        "generatesRevenue": false
    },
    "Retail": {
        "numberMembers": 391,
        "formalName" : "Retail Merchants",
        "generatesRevenue": true
    },
    "Engineering": {
        "numberMembers": 80,
        "formalName" : "Engineering and Development",
        "generatesRevenue": false
    },
    "DIST": {
        "numberMembers": 129,
        "formalName" : "Distribution",
        "generatesRevenue": true
    }
}

// output the names of each deparment using for ... in

for (let dept in departments) {
    console.log(dept);
}

/*
Outputs
=======
IT
Retail
Engineering
DIST
*/

// get the total of all employees that help generate revenue
let revenueCount = 0;
for (let dept in departments) {
    if (departments[dept].generatesRevenue) {
        revenueCount += departments[dept].numberMembers;
    }
}

console.log(revenueCount); // outputs 520

// Object.keys
// another method to get all property key names for an object
const deptKeys = Object.keys(departments);
console.log(deptKeys); // outputs [ 'IT', 'Retail', 'Engineering', 'DIST' ]