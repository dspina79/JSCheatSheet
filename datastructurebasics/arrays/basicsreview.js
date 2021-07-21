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

// Exctract Array Contents using Slice
// format: arr.slice(x, y) where x = starting index and y = the index up to, but not including, the slice
const simpleArray = [0, 1, 2, 3, 4, 5, 6, 7];
const newSimpleArray = simpleArray.slice(2, 5);
console.log(newSimpleArray); // outputs [2, 3, 4]

// Copy Entire Array with Spread (...)
const cloneSimple = [...simpleArray];
console.log(cloneSimple); // outputs [0, 1, 2, 3, 4, 5, 6, 7];

// using spread to copy in parts of an array
const teamA = ['Shelly', 'Bernice', 'Nigel'];
const teamB = ['Doug', 'Laura', 'Craig'];
const teamAwesome = ['Helen', ...teamA, ...teamB];
console.log(teamAwesome);
/*
Outputs
=======
[
  'Helen',   'Shelly',
  'Bernice', 'Nigel',
  'Doug',    'Laura',
  'Craig'
]
*/

// Finding an Element using indexOf()
// format: arr.indexOf(arr, elem) returns the index of the found element (elem) in
// the array (arr) or -1 if it is not found
const searchArray = ["cat", "dog", "bird", "hamster"];
console.log(searchArray.indexOf("bird")); // outputs 2
console.log(searchArray.indexOf("rat")); // outputs -1

// multidimsenional & nested arrays
const multidimenionArray = [
    [1, 3, 5, 7],
    [2, 4, 6, 8]
];

// to get 4 use:
const four = multidimenionArray[1][1];
console.log(four);

// deeply nested arrays
const nestedArray = [
    "first_level", [
        "second_level", [
            "third_level", [
                "and_deeper"
            ]
        ]
    ]
];

console.log(nestedArray[1][1][1][0]); // outputs  "and_deeper"