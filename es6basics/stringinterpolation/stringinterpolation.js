// String Interpolation
// embedding variables directly into strings without concatenation

var myName = "Dean";

// old way to generate greeting
console.log("Hello, " + myName);

// using string interpolation:
console.log(`Hello, ${myName}`);

// handling with destructuring
const myEmployee = {
    firstName: "Dean",
    lastName: "Smith",
    id: 2349290,
    manager: "Helen Sharp",
    department: "Information Technologies",
    position: "Senior Developer"
};

const displayEmployee = ({firstName, lastName, position}) => {
    return `${lastName}, ${firstName} - ${position}`;
};

console.log(displayEmployee(myEmployee)); // outputs Smith, Dean - Senior Developer