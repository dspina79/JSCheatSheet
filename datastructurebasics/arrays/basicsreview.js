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

// Splicing - a way to remove more than one sequential items in a call
// format: arr.splice(startingIndex, numberToDelete)

const tooManyElementsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tooManyElementsArray.splice(3,4); // delete from the third index arr[3] for the next 4 terms
console.log(tooManyElementsArray); // outputs [ 1, 2, 3, 8, 9, 10 ]

// add an element at the end of the array following splicing with the 3rd parameter
const anotherTooManyElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
anotherTooManyElements.splice(3,4, 20, 21, 22); 
// ^^^ delete from the third index arr[3] for the next 4 terms 
// and adds 20, 21, 22 at the 3rd index
console.log(anotherTooManyElements); // outputs [ 1, 2, 3, 20, 21, 22, 8, 9, 10 ]

// using splice just to insert
const smallerArray = ["Bob", "Lisa", "Ted", "Helen"];
smallerArray.splice(2, 0, "Sharon", "Victoria"); // new elements starting at index 2
console.log(smallerArray); // outputs [ 'Bob', 'Lisa', 'Sharon', 'Victoria', 'Ted', 'Helen' ]