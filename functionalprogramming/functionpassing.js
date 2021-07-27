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

