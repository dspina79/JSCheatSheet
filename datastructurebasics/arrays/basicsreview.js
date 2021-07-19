// Arrays
// collection of mixed data types
// organized and indexed using zero-index notation where 0 = first element

let myArray = ["Nixon", "Ford", "Carter"];

// push - adds one or more items to the end of an array
// unshift - adds one or more items to the start of an array

myArray.push("Regan", "Bush", "Clinton");
myArray.unshift("Einsenhower", "Kennedy", "Johnson");

console.log(myArray);
/*
Outputs
=======
[
  'Einsenhower', 'Kennedy',
  'Johnson',     'Nixon',
  'Ford',        'Carter',
  'Regan',       'Bush',
  'Clinton'
]
*/

// Removing Items
// pop() - removes an item from the end of an array and assigns it to a variable
// shift() - removes an item from the start of an array and assigns it to a variable

const mySecondArray = ["a", "b", "c", "d"];
const popped = mySecondArray.pop();
const shifted = mySecondArray.shift();

console.log(popped); // outputs "d"
console.log(shifted); // outputs "a"
console.log(mySecondArray); // outputs [ 'b', 'c' ]