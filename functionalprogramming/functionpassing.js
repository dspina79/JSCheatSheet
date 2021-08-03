// Passing Functions as Arguments

// all methods in JavaScript are first class functions
// they can be sent as parameters and called from other functions

const helloMessage = (name) => console.log(`Hello, ${name}`);
const goodbyeMessage = (name) => console.log(`Good bye, ${name}`);

// two of the arguments are function references
const engageWithPerson = (personName, greeting, ending) => {
    greeting(personName);
    ending(personName);
};

engageWithPerson("Denise", helloMessage, goodbyeMessage);
/*
Outputs
=======
Hello, Denise
Good bye, Denise
*/

// Handling Global Variables in Functions

// since arrays are mutable, the following code
// and function will mutate the array
var globalVar = ["One", "Two", "Three"];

function addText(originalArray, toAppend) {
    originalArray.push(toAppend);
    return originalArray;
}

addText(globalVar, "else");
console.log(globalVar); // outputs [ 'One', 'Two', 'Three', 'else' ]

// now protecting using function copies
var globalVar2 = ["five", "four", "three"];
function addValue(originalArray, toAppend) {
    let arrayCopy = [...originalArray]; // variable copy
    arrayCopy.push(toAppend);
    return arrayCopy;
}

const result = addValue(globalVar2, "100");
console.log(globalVar2); // outputs [ 'five', 'four', 'three' ]
console.log(result); // outputs [ 'five', 'four', 'three', '100' ]
