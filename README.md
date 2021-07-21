# JavaScript Cheat Sheet
## Basics
### Assignment and Math
```javascript
/*
    Basic Syntax
*/

// Comments

// <-- two slashes denotes a single line comment

/*
    asterisk and slashes allow 
    for multiline comments
*/


// variable assignment (pre-ES6)

var x; // identifies variable with no initial value
var y = 5; // initializes variable y with value 5

// number variables - simple
var intValue = 16; // int variable
var floatValue = 89.2340; // float variable

// string assignment
var myStirng = "This is a string";

// you can use double or single quotes as long as they match
var mySingleQuotes = 'This is using single quotes';
var myDoubleQuotes = "This is using double quotes";

// single quotes can be in double quotes
var mixedQuotes = "The coders call this languages 'JavaScript'";

/*
    Basic Math Operations
*/

// addition
var a = 5 + 8;

// subtraction
var b = 6 - 4;

// multiplication
var c = 9 * 2;

// division
var d = 18/6;

// increment operations
var simpleNumber = 5;
simpleNumber++; // simpleNumber is now 6
simpleNumber--; // simpleNumber is now back to 5;

// compound math assignment
simpleNumber += 6; // same as simpleNumber = simpleNumber + 6;
simpleNumber -= 6; // same as simpleNumber = simpleNumber - 6;
simpleNumber *= 6; // same as simpleNumber = simpleNumber * 6;
simpleNumber /= 6; // same as simpleNumber = simpleNumber / 6;

// string concatenation
var myName = "Dave";
var greetingPrefix = "Hello";
var greeting = greetingPrefix + ", " + myName;
console.log(greeting); // outputs "Hello, Dave";
```
### Arrays
```javascript
// basic array nomenclature

var myFirstArray = [1,2,3,4,5];

// get the first element of an array
var myFirstArrayElementElement = myFirstArray[0];
// get the second element of an array
var myFirstArraySecondElement = myFirstArray[1];

console.log(myFirstArrayElementElement);
console.log(myFirstArraySecondElement);

// mixed arrays
var myMixedArray = ["Doug", 22];
var dougAge = myMixedArray[1];

// nested arrays
var myNestedArray = [["cats", 3], ["dogs", 1], ["fish", 5]];
var numFish = myNestedArray[2][1];
console.log(numFish);


/*
    push, pop, shift
*/

var myStartingArray = [1,2,3,4,5];
console.log(myStartingArray);
// push() => add element to array
console.log("push(6)");
myStartingArray.push(6);
console.log(myStartingArray);

// pop() - remove last element of an array and return it
console.log("pop()");
var myStartingArrayPopValue = myStartingArray.pop();
console.log(myStartingArrayPopValue);
console.log(myStartingArray);

// shift - remove first element in an array and return it
console.log("shift()");
var myStartingArrayShiftValue = myStartingArray.shift();
console.log(myStartingArrayShiftValue);
console.log(myStartingArray);

// unshift - add element to the start of an array
console.log("unshift()");
myStartingArray.unshift(100);
console.log(myStartingArray);
```
### Functions
```javascript
// basic function declaration and use

function sayHello() {
    console.log("Hello, World!");
}

sayHello();

// functions with parameters

function add(x, y) {
    console.log(x + y);
}

add(1, 2);

// function score
var myGlobalVar = 10; // global variable

function testVariableScope() {
    var myLocalVar = 100;
    myGlobalVar = 20;

    console.log(myLocalVar);
}

testVariableScope();

// myLocalVar is not defined
 console.log("myGlobalVar = " + myGlobalVar); // 20


 // variables and returns
 function addToFixedQueue(arr, item) {
    arr.push(item);
    arr.shift();
    return arr.length;
 }

 var myFixedQueue = [1,2,3,4,5,6];
 var myQueueLength = addToFixedQueue(myFixedQueue, 7);
console.log(myFixedQueue); // [2,3,4,5,6,7]
console.log(myQueueLength); // 6
```
### Conditionals
```javascript
// basic condition checking
var myBoolean = true;
if (myBoolean) {
    console.log('My boolean variable is true.');
} else {
    console.log('My boolean variable is false.');
}

// comparisons
var myAge = 40;

// basic equivalence
if (myAge == 40) {
    console.log('My age does equal 40');    
}

if (myAge == '40') {
    console.log('My age does equal \'40\'');    
}

// inequality check
if (myAge == 20) {
    console.log('My age does not equal 20');    
}

if (myAge == '20') {
    console.log('My age does equal \'20\'');    
}

// strict equivalence
if (myAge === 40) {
    console.log('My age does equal 40');    
}

if (myAge === '40') {
    console.log('My age does equal \'40\'');    
} else {
    console.log('My age is not equal to \'40\''); //displays
}

/*
    Logical Operators
*/

// logical AND (&&)

if (1 < 2 && 1 > 0) {
    console.log("This is true"); // outputs
}

if (1 < 2 && 1 > 3) {
    console.log("This is also true?"); // will not print
}

// logical OR (||)
if (1 < 2 || 1 > 4) {
    console.log("This is true"); // outputs
}

if (1 < 0 || 1 > 3) {
    console.log("This is also true?"); // will not print
}


/*
    CONDITIONS
*/

// basic if statement

var myTestNum = 10;

if (myTestNum >= 10) {
    console.log('Test num is >= 10');
}

// if/else
if (myTestNum >= 15) {
    console.log('Test num is >= 15');
} else {
    console.log('Test num is less than 15');
}

// if - else if - else
if (myTestNum >= 20) {
    console.log('Test num is >= 20');
} else if (myTestNum > 15) {
    console.log('Test num is > 15');
} else if (myTestNum >= 10) {
    console.log('Test num is >= 10');
} else {
    console.log('Test num is less than 10');
}

// switch statement 
var mySwitchVar = 3;
switch(mySwitchVar) {
    case 1:
        console.log('Alpha');
        break;
    case 2:
        console.log('Beta');
        break;
    case 3:
        console.log('Gamma');
        break;
    case 4:
        console.log('Delta');
        break;
    default:
        console.log('Unknown');
        break;
}

// fall-through on switch
var currentChapter = 5;
switch (currentChapter) {
    case 1:
    case 2:
    case 3:
        console.log('Start of the book');
        break;
    case 4:
    case 5:
    case 6:
        console.log('Middle of the book');
        break;
    case 7:
    case 8:
        console.log('End of the book');
        break;
    default:
        console.log('I don\'t know what you\'re reading.');
        break;
}
```
### Objects
```javascript
// basic object notations - dot (.) and bracket

var myCat = {
    name: 'Charlotte',
    type: 'tabby',
    age: 8,
    legs: 4,
    tail: 1,
    purrs: true
};

console.log(myCat.name);
console.log(myCat.purs);
console.log(myCat["name"]);
console.log(myCat["purs"]);

// adding properties
myCat.color = "black";
console.log(myCat + " is " + myCat.color);

// removing properties
console.log('Before the removal:');
console.log(myCat);
delete myCat.color;
console.log('After the removal:');
console.log(myCat);

// check if an object has a property using hasOwnProperty
var hasTails = myCat.hasOwnProperty('tail');
console.log('Does the cat have a tail property? ' + hasTails);

var possibleProperties = ["name", "age", "color", "hair", "tail", "legs", "purrs"];
console.log("\nProperty Checker");
for (var prop of possibleProperties) {
    console.log(prop + "? " + myCat.hasOwnProperty(prop));
}

/*
    COMPLEX OBJECTS
*/

var myWorkGroup = {
    "department" : "Information Technologies",
    "reports_to" : "Executive Team",
    "members" : [
        {
            "first_name" : "Helen",
            "last_name" : "Smith",
            "employee_id" : 1234899,
            "skills" : [
                "Java",
                "SQL",
                "Project Management"
            ],
            "manager_id" : 111111
        },
        {
            "first_name" : "Sharon",
            "last_name" : "Monshare",
            "employee_id" : 12849120,
            "skills" : [
                "JavaScript",
                "SaaS",
                "CI/CD"
            ],
            "manager_id" : 111111
        },
        {
            "first_name" : "Louise",
            "last_name" : "Holderman",
            "employee_id" : 111111,
            "skills" : [
                "Team Building",
                "Architecture",
                "Project Management"
            ],
            "manager_id" : 823749
        }
    ]
};

// assignment
var departmentName = myWorkGroup.department;
var secondPersonSkills = myWorkGroup.members[1].skills;


```
### Loops and Recursion
```javascript
// basic while loop
var x = 5;
while (x > 0) {
    console.log(x);
    x--;
} // should print 5, 4, 3, 2, 1

// basic do...while loops
// will run at least once
var y = 10;
do {
    console.log(y);
    y--;
} while (y > 5)

// this will still run once
y = 10;
do {
    console.log(y);
    y--;
} while (y > 10)


// for loops
for (var i = 0; i < 10; i++) {
    console.log('Printing...' + i);
}

for (var i = 0; i < 10; i+=2) {
    console.log('Primarily printing even numbers...' + i);
}
console.log('Zero doesn\'t count');

/*
    RECURSION
*/

// using recursion for factorials
function factorial(x) {
    if (x === 1) {
        return 1;
    } 
    
    return x * factorial(x - 1);
}

console.log("5! = " + factorial(5));

// number ranges
var rangeArray = [];

function generateRange(startNum, endNum, step) {
    if (startNum <= endNum) {
        rangeArray.push(startNum);
        generateRange(startNum += step, endNum, step); 
    }

    return rangeArray;
}

console.log(generateRange(2, 14, 3)); // prints [ 2, 5, 8, 11, 14 ]
```
### Specialized Functions and Operators
```javascript
/*
    Specialized Functions and Operators
*/

// ternary operator
// format: condition ? trueValue : falseValue

var nameField = "lastName";
var nameElement = nameField === "lastName" ? "Smith" : "Brian";

// example use in a function
function checkEquality(x, y) {
    return x === y ? "Equal" : "Not Equal";
}

var equalityTesters = [[1,1], [1,3], [2, 7], ["a", "b"], ["a", "A"], ["x", "x"]];
for (var i = 0; i < equalityTesters.length; i++) {
    var xElement = equalityTesters[i][0];
    var yElement = equalityTesters[i][1];
    var result = checkEquality(xElement, yElement);
    console.log("Are " + xElement + " and " + yElement + " are " + result);
}

// Special Functions

// parseInt - parses values to integers
var myStringValue = "15";
var myBinaryStringValue = "10100101";

console.log(parseInt(myStringValue));
console.log(parseInt(myBinaryStringValue, 2)); // indicates base 2

var myStringValues = [["124", 10],["101010111", 2],["0xFF", 16],["71", 8]];
for (var i = 0; i < myStringValues.length; i++) {
    var val = myStringValues[i][0];
    var b = myStringValues[i][1];
    var result = parseInt(val, b); // value and base
    console.log("The base 10 int value of " + val + " base(" + b + ") is " + result);
}
```
## ES6 Basics
### Variables let and const Declaration
```javascript
// new variable declartion option: let

// "let" variables are only available in the scope 
// of their declaration

{
var myVarName = "Dave";
let myLetName = "Dean";
} // using brackets to isolate scope

function printOutput() {
    try {
        if (myVarName !== undefined) {
            console.log("myVarName is present and is " + myVarName);
        }
    } catch(err) {
        console.log("Accessing myVarName caused an error: " + err); // should not fire
    }
    try {
        if (myLetName !== undefined) {
            console.log("myLetName is present and is " + myLetName);
        }
    } catch(err) {
        console.log("Accessing myLetVarName caused an error: " + err); // should fire    
    }
}

printOutput();

// const keyword - stopping resassignment of a variable
// note: const variables should be all caps with _ between words

const X_ELEMENT = 50;

try {
    X_ELEMENT = 20; // illegal
} catch (error) {
    console.log(error); // this will output
}

// objects and arrays that are constant are mutable
// they cannot be reassigned

const SOME_PERSON = {
    firstName: "Dean",
    lastName: "Smith",
    age: 30
};

SOME_PERSON.age++; // legal

console.log(SOME_PERSON);

// same is true for constant arrays
const SAMPLE_NUMBERS = [1,2,3,4,5];
console.log("Numbers before mutation:");
console.log(SAMPLE_NUMBERS); //1,2,3,4,5
SAMPLE_NUMBERS[2] = 100;
console.log("Numbers after mutation:");
console.log(SAMPLE_NUMBERS); //1,2,100,4,5


// Object.freeze will stop an object or array from mutation
const FROZEN_ARRAY = [1,2,3,4,5];
const FROZEN_PERSON = {
    firstName: "Dean",
    lastName: "Wilson",
    age: 35
};
Object.freeze(FROZEN_ARRAY);
Object.freeze(FROZEN_PERSON);

try {
    FROZEN_ARRAY[1] = 15; // won't change
    console.log(FROZEN_ARRAY); // outputs 1,2,3,4,5
} catch(error) {
    console.log("Error caught when attempting array update: " + error);
}

try {
    FROZEN_PERSON.age = 50; // won't change
    console.log(FROZEN_PERSON); // outputs Dean Smith Age 35, not 50
} catch(error) {
    console.log("Error caught when attempting object update: " + error);
}
```
### Arrow Functions
```javascript
// use arrow (=>) functions for shorthand

// basic function without parameters
function sayHello() {
    console.log('Hello World!');
}

// basic function with parameters
function add(x, y) {
    return x + y;
}

// rewritten as an arrow functions
const sayHello2 = () => console.log('Hello World Again!');
const add2 = (x, y) => x + y; // returns x + y without the return keyword

// calling arrow functions is the same as regular functions
sayHello();
sayHello2();

console.log(add(5,3));
console.log(add2(5,10));

// more complex operations
const getAbsoluteValue = (x) => {
    if (x < 0) {
        return x * -1;
    }
    return x;
}

console.log(getAbsoluteValue(5));
console.log(getAbsoluteValue(-5));
console.log(getAbsoluteValue(0));
```
### Parameterization
```javascript
// using default values for methods

// old way:
function increment(number, value) {
    if (number === undefined) {
        number = 0;
    }

    if (value === undefined) {
        value = 1;
    }

    return number + value;
}

// usind default methods and arrow functions
const incrementArrow = (number = 0, value = 1) => number + value;
console.log(incrementArrow(1,2)); // outputs 3
console.log(incrementArrow(1)); // outputs 2
console.log(incrementArrow()); // outputs 1


// rest arguments
// used to represent one or more other arguments

const sumItUp = (...nums) => nums.reduce((x, y) => x + y, 0);
console.log(sumItUp(1,2,3,4,5,6)); // outputs 21
console.log(sumItUp("A", "B", "C", "D", "E")); //outputs 0ABCDE
```
### Spread Operator
```javascript
// Spread Operator (...)
// references all components in an object or array

const myArray = [1,3,7,9,11];

// copy the elmeents into a new array
const mySecondArray = [...myArray];

console.log(myArray); // outputs [1,3,7,9,11]
console.log(mySecondArray); // outputs [1,3,7,9,11]
// compare using stringify for equality
console.log(JSON.stringify(myArray) === JSON.stringify(mySecondArray)); // true

// the spread operator can be used for simple object cloning

const person1 = {
    firstName: "Lou",
    lastName: "Sheridan",
    email: "lousher@xnowherey.net"
};

const person2 = {...person1}; // cloning

person2.firstName = "Christine";
person2.email = "csher@xnowherey.net";

console.log(person1); 
/*
Outputs
=======
{
  firstName: 'Lou',
  lastName: 'Sheridan',
  email: 'lousher@xnowherey.net'
}
*/

console.log(person2); 
/*
Outputs
=======
{
  firstName: 'Christine',
  lastName: 'Sheridan',
  email: 'csher@xnowherey.net'
}
*/

```
### Destructuring Objects
```javascript
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
```
### String Interpolation
```javascript
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
```
### Classes and Objects
```javascript
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
```
### Promises
```javascript
// Promises

// variable used in later examples
var myToken = "sample";

// basic promise structure
const myPromise = new Promise((resolve, reject) => {
    if (myToken === "sample") {
        resolve("Successful token received.");
    } else {
        reject("Token was not received or in the correct format.");
    }
});

// use then to check the results from the promise
myPromise.then(result => {
    console.log(result); // outputs "Successful token received."
});

// now change the variable to an invalid data
myToken = "NOT_VALID";

const mySecondPromise = new Promise((resolve, reject) => {
    if (myToken === "sample") {
        resolve("Successful token received.");
    } else {
        reject("Token was not received or in the correct format.");
    }
});

// set the promise output to catch errors on rejection
mySecondPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error); // outputs Token was not received or in the correct format.
});
```
## Regular Expressions
### Testing
```javascript
// Testing Regex

// using regular expressions to test whether a source string
// has the regular expression pattern
const mySentence = "The quick brown fox jumps over the lazy dog.";

// simple regex patterns to look for specific words - in between "/"
const regexQuick = /quick/; // match "quick"
const regexBlue = /blue/; // match "blue"

const resultQuick = regexQuick.test(mySentence);
const resultBlue = regexBlue.test(mySentence);

console.log(`Result of regexQuick: ${resultQuick}`); // output true
console.log(`Result of regexBlue: ${resultBlue}`); // outut false


// testing for multiple exclusive matches
// e.g. find any of the following using "|" between terms

const regexRocks = /sedimentary|igneous|metamorphic/
const rachelFinds = "Rachel discovered some igneous rocks.";
const markFinds = "Mark found some metamorphic rocks";
const helenFinds = "Helen found some meta-metals!";

const rachelResult = regexRocks.test(rachelFinds);
const markResult = regexRocks.test(markFinds);
const helenResult = regexRocks.test(helenFinds);

console.log(`Rachel result: ${rachelResult}`); // outputs true
console.log(`Mark result: ${markResult}`); // outputs true
console.log(`Helen result: ${helenResult}`); // outputs false

// Ignoring case
// adding "i" at the end of the expression will ignore casing on
// word matches

const regexFriendlyExact = /friendly/; // must match case sensitive
const regexFriendlyInsensitive = /friendly/i; // can match any casing

console.log(regexFriendlyExact.test("John's username is FRiendlyGuy3929")); // false
console.log(regexFriendlyInsensitive.test("John's username is FRiendlyGuy3929")); // true


```
### Matching Basics
```javascript
// Regex Pattern Matching

// different than testing
// actually finds the matching element in the string

const mySentence = "The quick brown fox jumps over the lazy dog.";
const regexQuick = /QUICK/i;

const matchingQuick = mySentence.match(regexQuick);
console.log(matchingQuick); 
/*
    The above outputs:
    [
        'quick',
        index: 4,
        input: 'The quick brown fox jumps over the lazy dog.',
        groups: undefined
    ]
*/

// matching multiple outputs
const secondString = "Doug, the barber, worked at the barber shop for 10 years.";
const secondRegEx = /barber/gi;
const secondResult = secondString.match(secondRegEx);
console.log(secondResult); // outputs [ 'barber', 'barber' ]

// matching with an optional character using .
const optionalCharRegEx = /d.g/;
const stringChecks = ['dog', 'dug', 'up', 'dg', 'dig', 'ape'];
for (var i = 0; i < stringChecks.length; i++) {
    let str = stringChecks[i];
    let regexTest = optionalCharRegEx.test(str);
    console.log(`${str} : ${regexTest}`);
}

/*
Outputs:
dog : true
dug : true
up : false
dg : false
dig : true
ape : false
*/

// match all specific characters
const specificCharRegex = /wh[eao]m/gi; // gi indicates all matches ignoring case
const fourthSentence = "Whom is in the east of wham when John whishes?";
const fourthMathResult = fourthSentence.match(specificCharRegex);
console.log(fourthMathResult); // outputs [ 'Whom', 'wham' ]

// matching character ranges using [letter-letter]
// example
const alphabetRegex = /[a-z]/gi; // matches all letters a-z case insensitve
const myLongSentence = "Brian and Peter went to 100 main street.";
const longSentenceResults = myLongSentence.match(alphabetRegex);
console.log(longSentenceResults);

/*
Outputs (note there is no match on the numbers)
===============================================
[
  'B', 'r', 'i', 'a', 'n', 'a',
  'n', 'd', 'P', 'e', 't', 'e',
  'r', 'w', 'e', 'n', 't', 't',
  'o', 'm', 'a', 'i', 'n', 's',
  't', 'r', 'e', 'e', 't'
]
*/

// matching letters and numbers
const myAlphaNumericRegex = /[a-z0-9]/gi; // matches all letters and numbers
const longSentenceAlphaNumericResult = myLongSentence.match(myAlphaNumericRegex);
console.log(longSentenceAlphaNumericResult);

/*
Outputs
=======
  'B', 'r', 'i', 'a', 'n', 'a',
  'n', 'd', 'P', 'e', 't', 'e',
  'r', 'w', 'e', 'n', 't', 't',
  'o', '1', '0', '0', 'm', 'a',
  'i', 'n', 's', 't', 'r', 'e',
  'e', 't'
]
*/

// smaller alpha numeric sets
const mySmallerAlphaNumericRegex = /[a-f0-2]/gi;
const myShorterSentence = "There are 4023 different ways to think about possums.";
const shorterSentenceResult = myShorterSentence.match(mySmallerAlphaNumericRegex);
console.log(shorterSentenceResult);

/*
Outputs
=======
[
  'e', 'e', 'a', 'e',
  '0', '2', 'd', 'f',
  'f', 'e', 'e', 'a',
  'a', 'b'
]
*/

// excluding characters in matches with the ^ to indicate not to match
const excludeHalfAlphabet = /[^n-z]/gi;
const hamlet = "To be, or not to be; that is the question";
const hamletResult = hamlet.match(excludeHalfAlphabet);
console.log(hamletResult);

/*
Outputs - 
notice that even whitespace characters and punctuation appear
=============================================================
[
  ' ', 'b', 'e', ',', ' ',
  ' ', ' ', ' ', 'b', 'e',
  ';', ' ', 'h', 'a', ' ',
  'i', ' ', 'h', 'e', ' ',
  'e', 'i'
]
*/

// Wildcards

// matching any consecutive pattern with +
// must have one or more times
console.log("work".match(/r+/gi)); // outputs ['r']
console.log("pizza".match(/z+/gi)); // outputs ['zz']
console.log("Mississippi".match(/s+/gi)); // ['ss', 'ss']
console.log("New York".match(/s+/gi)); // outputs null
console.log("permission".match(/is+/g)); // outputs [ 'iss' ]
console.log("Lisa".match(/is+/g)); // outputs [ 'is' ]
console.log("posse".match(/is+/g)); // outputs null

// matching one or more of the same character
console.log("Gooooooooaallll!".match(/Go*/g)); // outputs [ 'Goooooooo' ]
console.log("Goodwill".match(/Go*/g)); // outputs ['Goo']
console.log("Gallop!".match(/Go*/g)); // outputs ['G']
console.log("Doooone!".match(/Go*/g)); // outputs null

// lazy matching using the ? to find the smallest match
const nonLazyMatchRegex = /@[a-z]+x/;
const lazyMatchRegex = /@[a-z]+?x/;
const testLazyMatching = ['@alex', 'alex', '@brimaxex', '@logan', '@x'];
for (var i = 0; i < testLazyMatching.length; i++) {
    let resultNonLazy = testLazyMatching[i].match(nonLazyMatchRegex);
    let resultLazy = testLazyMatching[i].match(lazyMatchRegex);
    console.log(`\n${testLazyMatching[i]}`);
    console.log(`Non Lazy: ${resultNonLazy}`);
    console.log(`Lazy: ${resultLazy}`);
}
/*
Outputs
=======
@alex
Non Lazy: @alex
Lazy: @alex

alex
Non Lazy: null
Lazy: null

@brimaxex
Non Lazy: @brimaxex
Lazy: @brimax

@logan
Non Lazy: null
Lazy: null

@x
Non Lazy: null
Lazy: null
*/

// matching with start ^ and end $
// note ^ in a list denotes "do not find" while at the 
// beginning of an expression means "starging with"
const newSentencePattern = "Abel's username is @abe and his other username is @axeld. His email is abe@xnowhere.net";
const usernameExample = "@abel";
const emailExample = "john@xnowhere.net"
const startingAtRegex = /^@[a-d]+/g; // find all matches starting with @ followed by letters a-d
const endingAtRegex = /^[a-z]+@xnowhere.net$/gi; //starting with any letter and ending with @

const startingResult = newSentencePattern.match(startingAtRegex);
console.log(startingResult); // returns null because the sentence does not start with the correct criteria
const endingResult = newSentencePattern.match(endingAtRegex);
console.log(endingResult); // returns null because the sentence does not meet the start criteria 

console.log(usernameExample.match(startingAtRegex)); // outputs [ '@ab']
console.log(emailExample.match(endingAtRegex)); // outputs [ 'john@xnowhere.net' ]

// optional use of character with ?
// indicates the preceeding element may be included (0 or 1)

const optionalElement = /Michell?e/; // handles optional l for the name "Michelle" or "Michele"
const michelles = ["Michelle", "Michele", "Michellle"];
for (var i = 0; i < michelles.length; i++) {
    console.log(`${michelles[i]}: ${optionalElement.test(michelles[i])}`);
}

/*
Outputs
=======
Michelle: true
Michele: true
Michellle: false
*/
```
### Matching - Special Notation
```javascript
// Special Notations

// \w = alphanumeric characters = [A-Za-z0-9_]
const basicSentence = "The quick brown fox jumps over the lazy dog.";
const wordRegex = /\w+/g; // if you do not add the + it will count each letter

// count the number of words in the setence
const wordCount = basicSentence.match(wordRegex).length;
console.log(`The sentence, '${basicSentence}' has ${wordCount} words`);
// outputs: The sentence, 'The quick brown fox jumps over the lazy dog.' has 9 words

// \W = non alphanumeric characters; the opposite of \w
const nonWordRegex = /\W/g;
const nonANCount = basicSentence.match(nonWordRegex).length;
console.log(`The sentence, '${basicSentence}' has ${nonANCount} other characters`);
// outputs: The sentence, 'The quick brown fox jumps over the lazy dog.' has 9 other characters


// \d digit regex = [0-9]
const countDigitsRegex = /\d/g;
const countNumbersRegex = /\d+/g;
const numericContainingSentence = "Julie picked 10 apples and 209 blueberries.";
const digitCount = numericContainingSentence.match(countDigitsRegex).length;
const numberCount = numericContainingSentence.match(countNumbersRegex).length;
console.log(`The sentence, '${numericContainingSentence}', contains ${digitCount} individual digits.`);
// outputs: The sentence, 'Julie picked 10 apples and 209 blueberries.', contains 5 individual digits.

console.log(`The sentence, '${numericContainingSentence}', contains ${numberCount} numbers.`);
// outputs: The sentence, 'Julie picked 10 apples and 209 blueberries.', contains 2 numbers.


// \D = non digit characters
const nonDigitSentence = "I saw 100 dogs, each with 20 white spots.";
console.log(nonDigitSentence.match(/\D/g));
/*
Outputs
=======
[
  'I', ' ', 's', 'a', 'w', ' ', ' ',
  'd', 'o', 'g', 's', ',', ' ', 'e',
  'a', 'c', 'h', ' ', 'w', 'i', 't',
  'h', ' ', ' ', 'w', 'h', 'i', 't',
  'e', ' ', 's', 'p', 'o', 't', 's',
  '.'
]
*/

// Whitespace Characters: \s
const sameSentence = "The quick brown fox jumps over the lazy dog.";
const whitespaceRegex = /\s+/g;
const whitespaceResults = sameSentence.match(whitespaceRegex);
console.log(whitespaceResults.length); // outputs 8

// \S = non whitespace characters
const nonWhitespaceRegex = /\S+/g;
console.log(sameSentence.match(nonWhitespaceRegex).length); // outputs 9 (words)


```
### Matching - Repeating Elements
```javascript
// Repeating Counts
// indicating how often a term must appear in order for a match

// format /x{min,max}/ - indicates min an max repeats of 'x'
// format /x{min,}/ - indicates only a minumum number
// format /x{,max}/ - indicates a maximum number
// format /x{n}/ - indicates a specific number

const betweenThreeAndFiveORegex = /Wo{3,5}rd/;
const atLeastThreeORegex = /Wo{3,}rd/;
const exactlyFourRegex = /Wo{4}rd/;

const myWords = ["Word", "Woord", "Wooord", "Woooord", 
                    "Wooooord", "Woooooord"];

for (var i = 0; i < myWords.length; i++) {
    console.log(`\n${myWords[i]}`);
    console.log("/Wo{3,5}rd/ = " + betweenThreeAndFiveORegex.test(myWords[i]));
    console.log("/Wo{3,}rd/ = " + atLeastThreeORegex.test(myWords[i]));
    console.log("/Wo{4}rd/ = " + exactlyFourRegex.test(myWords[i]));
}

/*
Outputs
=======

Word
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Woord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Wooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = true

Wooooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooooord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = true
/Wo{4}rd/ = false
*/

// Look Aheads with ?= and ?!
// ?= match the pattern somewhere in the code
// ?! do not match the pattern anywhere in the pattern

const containsThreeWhitespaces = /(?=\s{3})/; //contains at least three consecutive white spaces
const doesNotContainThreeWhitespaces = /(?!\s{3})/; // does not match any instance of 3 whitespaces
const testWhitespacePattern1 = "This is a pattern with   a couple of spaces.";
const testWhitespacePattern2 = "This one has single spaces";

console.log(containsThreeWhitespaces.test(testWhitespacePattern1)); // outputs true
console.log(containsThreeWhitespaces.test(testWhitespacePattern2)); // outputs false

console.log(doesNotContainThreeWhitespaces.test(testWhitespacePattern1)); 
// ^^ outputs true because there are instances of non-three-repeating whitespace characters
console.log(doesNotContainThreeWhitespaces.test(testWhitespacePattern2)); // outputs true

// Example of complex lookaheads
const simpleUsernameCheck = /\w+@(?=\D{3}\d{2})/; // username must be some text followed by @ then 3 nondigits followed by 2 digits
const usernameChecks = ["brian@som33", "david.wilkes@oldie", "a8s9f79.sjf22", "laura@hp222"];
for (var i = 0; i < usernameChecks.length; i++) {
    console.log(`${usernameChecks[i]}: ${simpleUsernameCheck.test(usernameChecks[i])}`);
}
```
### Replacing
```javascript
// Simple Replacements with Regular Expressions

// replace each instance of Hello with Goodbye

const helloRegex = /hello/ig;
const sentence = "The art of saying hello without saying 'hello'";
const newSentence = sentence.replace(helloRegex, "Goodbye"); 
console.log(newSentence);
// ^^^ outputs The art of saying Goodbye without saying 'Goodbye'

// replace all whitespace with underscores
const spaceRegex = /\s/g;
const underscoreSentence = sentence.replace(spaceRegex, "_");
console.log(underscoreSentence); 
// ^^^ outputs The_art_of_saying_hello_without_saying_'hello'
```
## Debugging
### Console and Type Determination
```javascript
// Console Output

// console.log(x) to output variable or other information
let a = 6;
let b = 7;
let c = a + b;
console.log(b); // outputs 13

// console.clear() to clear the log
console.clear();

// Type Determination Using typeof
// typeof(x) determines the type of the variable
const testVars = ["hello", 15, 20.23, true];
for (var i = 0; i < testVars.length; i++) {
    console.log(`${testVars[i]} - ${typeof(testVars[i])}`);
}

/*
Outputs
=======
hello - string
15 - number
20.23 - number
true - boolean
*/
```
## Basic Data Structures
### Arrays
```javascript
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
```
### Objects
```javascript
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
```
