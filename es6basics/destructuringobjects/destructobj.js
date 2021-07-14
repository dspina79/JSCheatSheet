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

// Destructure Arrays
// similar pattern
const myArr = [1, 2, 3, 5, 7, 11, 13];
let [a, b, c, d] = myArr;
console.log(a); // outputs 1
console.log(d); // outputs 5

// also allows for quick swapping
[a, d] = [d, a];
console.log(a); // outputs 5
console.log(d); // outputs 1

// using swap operator
const [x, y, ...arr] = myArr;
console.log(x); // outputs 1
console.log(y); // outputs 2
console.log(arr) // outputs [3, 5, 7, 11];

// destructuring in a method
const myTriangle = {
    type: "right",
    base: 4,
    height: 3
}

const area = ({base, height}) => (base * height) / 2.0;
console.log(area(myTriangle)); // outputs 6