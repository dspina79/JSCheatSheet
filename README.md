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


// Using Immediately Invoked Function Expression (IIFE)
// also known as anonymous functions

// non anonymous method
function doubleIt(n) {
    console.log(n * 2);
}

doubleIt(5); // outputs 10

// anonymous or IIFE
// the method is not named; it's anonymousx
(function (n) {
    console.log(n * 2);
})(10); // outputs 20


// Arguments Object
// the arguments object allows you to parse out each argument
// sent to the function

// display all arguments sent to the 
function iterateElements(elements) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

iterateElements("element1", "element2", "element3", "element4", "element5");
/*
Outputs
=======
element1
element2
element3
element4
element5
*/

iterateElements("this", "is", 1);
/*
Outputs
=======
this
is
1
*/

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
### Algorithms - Telephone Format Validation
```javascript
// Validate a Telephone Number
function telephoneCheck(str) {
    const regcheck = /^(?:1|1\s)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    console.log(regcheck.test(str));
    return regcheck.test(str);  
  
}
  
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

// Combine Array Elements with concat(...)
// note: this method is non mutating
const firstNumberArray = [1, 2, 3, 4, 5];
const secondNumberArray = [6, 7, 8];
let combinedArray = firstNumberArray.concat(secondNumberArray);
console.log("Concatenated array: " + combinedArray);
// ^^^ outputs Concatenated array: 1,2,3,4,5,6,7,8

// you can even add one element
combinedArray = combinedArray.concat(10);
console.log("Concatenated array: " + combinedArray);
// ^^^ outputs Concatenated array: 1,2,3,4,5,6,7,8,10


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
## Algorithms
### Temperature Conversion
```javascript
const toFarenheit = (celsius) => celsius * (9/5) + 32;
const toCelsius = (farenheit) => (farenheit - 32) * (5/9);

// convert 32 degrees f
console.log(`32 degrees F = ${toCelsius(32)}C`);
// convert 100 degrees c
console.log(`100 degrees C = ${toFarenheit(100)}F`);
```
### String Reversal
```javascript
const reverseString = (str) => {
    let retStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        retStr += str[i];
    }

    return retStr;
};

// test it
const strs = ["bob", "believe", "washington", "peaches"];

for (let str of strs) {
    console.log(`${str} reversed is ${reverseString(str)}`);
}
```
### Factorials
```javascript
const factorial = (num) => {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
};

// test it out
for (let i = 1; i < 7; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}
```
### Longest Word Determination
```javascript
// find the longest word in a string
function findLongestWord(str) {
    const strs = str.match(/\w+/g);
    let longestWord = '';
    for (let str of strs) {
        if (str.length > longestWord.length) {
            longestWord = str;
        }
    }
    return longestWord;
}

// test it
const sentenceToTest = "The once was a man who knew too little but ate a number of things.";
const longestWord = findLongestWord(sentenceToTest);
console.log(longestWord);
```
### String Truncation
```javascript
// Truncate a String
// Strings longer than num will end with elipses (...)

function truncateString(str, num) {
    if (str.length > num) {
        let testStr = "";
        for (let i = 0; i < num; i++) {
        testStr += str[i];
        }
        return testStr + "...";
    }

    return str;
}
  
console.log(truncateString("The quick brown fox jumps over the lazy dog", 10));
// ^^^ outputs "The quick ..."
```
### Find Element
```javascript
// Find an Element by an Anonymous Function
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
        return arr[i];
        }
    }

    return undefined;
}
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testFunc = (x) => x % 2 === 0 && x % 3 === 0;
const result = findElement(arr, testFunc);
console.log(result); // outputs 6
```
### Title Case a Phrase
```javascript
// Title Case a Phrase
function titleCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (i === 0 || str[i - 1] === " ") {
        letter = letter.toUpperCase();
        } else  {
        letter = letter.toLowerCase();
        }
        result += letter;
    }
    return result;
}
  
titleCase("I'm a little tea pot");
```
### Sort and Find Position
```javascript
// Find the Position to Insert in a Sorted Array
// given an array:  1) sort it
//                    2) return the index to insert the number provided in the sort    

function getIndexToIns(arr, num) {
    let index = 0;
    // sort it
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        index = i;
        break;
      } else if (arr[i] < num && ((i + 1) === arr.length || arr[i + 1] >= num )) {
        index = i + 1;
        break;
      }
    }
    return index;
  }
```
### Remove False Elements
```javascript
// Remove Elements from an Array that are False

function bouncer(arr) {
    const falseValues = [false, null, 0, "", undefined];
    for (let i = 0; i < falseValues.length; i++) {
      let index = arr.indexOf(falseValues[i]);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    
    // handling NaN separately
    var checkNaN = false;
    do {
      let index = -1;
      checkNaN = false;
      for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]) === 'NaN') {
          checkNaN = true;
          index = i;
        }
      }
      if (checkNaN) {
        console.log('Found' + index);
        arr.splice(index, 1);
      }
    } while(checkNaN)
    
    return arr;
  }
  
```
### Chunk/Mutate Array
```javascript
// Split Array into Chunks of Size n
// [1, 2, 3, 4, 5, 6] chunck 3 = [[1, 2, 3], [4, 5, 6]]

function chunkArrayInGroups(arr, size) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += size) {
      tempArr.push(arr.slice(i, i + size));
    }
    arr = tempArr;
    console.log(tempArr);
    return arr;
  }  
```
### Find Object
```javascript
// Find Objects 
// find objects in an array using matching key value pairs
function findObject(collection, objectPattern) {
    var arr = [];
    arr = collection.filter(item => {
      for (var k = 0; k < Object.keys(objectPattern).length; k++) {
        let key = Object.keys(objectPattern)[k];
        if (!item[key] 
            || objectPattern[key] !== item[key]) {
          return false;
        }
      }
      return true;
    });
    return arr;
  }
  
```
### Pig Latin Converter
```javascript
// Converts a string to Pig Latin

function translatePigLatin(str) {
    const consonantStart = /^[bcdfghjklmnpqrstvwxyz]+/g;
    const vowelStart = /^[aeiou]/;
    let arr = str.split(/\W/);
    for (let i = 0; i < arr.length; i++) {
        if (vowelStart.test(arr[i])) {
        arr[i] += "way";
        } else {
            let consStart = arr[i].match(consonantStart)[0];
            arr[i] = arr[i].replace(consStart, "");
            arr[i] += consStart + "ay";
        }
    }
    return arr.join(" ");
}  
```
### DNA Compliments
```javascript
// DNA Compliments
// returns an array of arrays of DNA complimentary pairs
// assuming an input sequence (e.g. "ATC")

function pairElement(str) {
    let dnaPairs = [];
    const dnaMap = {
        G: "C", T: "A", C: "G", A: "T"
    };
    for (var s of str) {
        let match = [s, dnaMap[s]];
        dnaPairs.push(match);
    }

    return dnaPairs;
}
```
### Find Missing Letter in a Range
```javascript
// Find the Missing Letter in a Range
// example: findMissingLetter("abcdf") returns "e"

function findMissingLetter(str) {
    str = str.toLowerCase();
    let foundLetter = undefined;
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterArray = letters.split("");
    const startingLetter = str[0];
    let startingIndex = 0;
    for (var i = 0; i < letterArray.length; i++) {
      if (letterArray[i] === startingLetter) {
        startingIndex = i;
        break;
      }
    }
    let index = 0;
    for (var i = startingIndex; i < letterArray.length; i++) {
      let goodLetter = letterArray[i];
      if (str[index] !== letterArray[i]) {
        foundLetter = letterArray[i];
        break;
      }
      index++;
    }
    
    return foundLetter;
}
```
### HTML Encoder
```javascript
// Encodes a String to HTML Format
// example: toHtml("Alpha & Beta") returns "Alpha &amp; Beta"
function toHtml(str) {
    let strArray = str.split("");
    for (var i = 0; i < strArray.length; i++) {
      let c = strArray[i];
      switch (c) {
        case "&":
          c = "&amp;";
          break;
        case ">" :
          c = "&gt;";
          break;
        case "<" :
          c = "&lt;";
          break;
        case "\"" :
          c = "&quot;";
          break;
        case "'" :
          c = "&apos;";
          break;
      }
      strArray[i] = c;
    }
    return strArray.join("");
}
  
```
### Sum Odd Fibbonacci Numbers
```javascript
// Find and Sum All Odd Fibbonacci Numbers

function sumFibs(num) {
    const fibs = getFibs(num);
    const oddFibs = fibs.filter(n => n % 2 === 1);
    const result = oddFibs.sum();
    
    return result;
}
  
function getFibs(maxNum) {
    let currentFib = 1;
    let fibArray = [1, 1];
    while(true) {
        currentFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        if (currentFib > maxNum) {
            break;
        }
        fibArray.push(currentFib);
    }
    return fibArray;
}

Array.prototype.sum = function() {
    let sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}

```
### Convert Binary String to ASCII String
```javascript
// Binary String Decoder
// returns the alpha-numeric representation of a string of
// binary numeric representations

function binaryStringDecover(str) {
    let strArray = str.split(" ");
    let outString = [];
    for (var i = 0; i < strArray.length; i++) {
        outString.push(String.fromCharCode(getNumberFromBinary(strArray[i])));
    }
    return outString.join("");
}

function getNumberFromBinary(binaryString) {
    return parseInt(binaryString, 2);
} 
```
### Orbital Period Calculation
```javascript
// Oribital Period Calculator
// in seconds

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let results = [];
    for (var i = 0; i < arr.length; i++) {
      var totalAlt = arr[i].avgAlt + earthRadius;
      var srv = Math.sqrt(((totalAlt * totalAlt * totalAlt) / GM));
      var per = parseInt(Math.round(2 * Math.PI * srv));
      var obj = {name: arr[i].name, orbitalPeriod: per};
      results.push(obj);
    }
    return results;
  }
  
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```
### 99 Bottles of Beer on the Wall Song
```javascript
// 99 Bottles of Beer Song

function sing() {
let beersOnWall = 99;
    while(beersOnWall > 2) {
        console.log(`${beersOnWall} bottles of beer on the wall.`)
        console.log(`${beersOnWall} bottles of beer!`)
        console.log('Take one down, pass it around');
        console.log(`${--beersOnWall} bottles of beer on the wall!\n`);        
    }

    console.log(`${beersOnWall} bottles of beer on the wall.`)
    console.log(`${beersOnWall} bottles of beer!`)
    console.log('Take one down, pass it around');
    console.log(`${--beersOnWall} bottle of beer on the wall!\n`);

    console.log(`${beersOnWall} bottle of beer on the wall.`)
    console.log(`${beersOnWall} bottle of beer!`)
    console.log('Take one down, pass it around');
    console.log("No bottles of beer on the wall!\n");        

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall...") 
}

sing();
```
## Object Oriented Programming
### Basics
```javascript
// Basic Object Oriented Programming

/*
    Note:   This section does not cover use of ES6 classes.
            Rather, this will cover OOP concepts that are 
            managed through JavaScript functions and prototyping.
*/

// Building an instance using a function
// the function can hold its own properties

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

// create instances of the Animal using the constructor
// generated from the function's signature

const cat = new Animal('Sebastian', 4);
const dog = new Animal('Parker', 3);

// accessing the properties using dot donation
console.log(`The cat's name is ${cat.name}`); // outputs "The cat's name is Sebastian"
console.log(`The dog's age is ${dog.age}`); // outputs "The dog's age is 3"

// checking whether a variable implements the definition using instanceof
// format: variable instanceof class returns true/false
const oddNumber = 13;

console.log(cat instanceof Animal); // outputs true
console.log(dog instanceof Animal); // outputs true
console.log(oddNumber instanceof Animal); // outputs false

// checking for properties using hasOwnProperty
// if a variable does not have the property, the method returns false
const testProperties = ["name", "age", "weight"];
for (let prop of testProperties) {
    console.log(`Testing property '${prop}'`);
    if (cat.hasOwnProperty(prop)) {
        console.log('The cat has that property');
    } else {
        console.log('The cat does not have the property.');
    }
}

/*
Outputs
=======
Testing property 'name'
The cat has that property
Testing property 'age'
The cat has that property
Testing property 'weight'
The cat does not have the property.
*/

// Adding Properties to Instances
// simply adding a new property to an **instance** just
// requires simple dot notation

cat.furColor = 'black';
console.log(`The cat, ${cat.name}, has ${cat.furColor} fur.`);
// ^^^ outputs "The cat, Sebastian, has black fur.""

// check if the object has the property defined
console.log(cat.hasOwnProperty('furColor')); // outputs true
console.log(dog.hasOwnProperty('furColor')); // outputs false

// Iterating Over Properties
// using for..in, each property can be isolated

for (let prop in cat) {
    if (cat.hasOwnProperty(prop)) {
        console.log(`cat.${prop} is present.`)
    } else {
        console.log(`cat.${prop} is not present.`)
    }
}

/*
Outputs
=======
cat.name is present.
cat.age is present.
cat.furColor is present.
*/


// Privatizing Properties Using Closures

// first use the let assignment for the property
// then create a privilaged method to get and set
// the property values

function Rock() {
    let mass = 0;

    this.getMass = function() {
        return mass;
    }

    this.setMass = function(newMass) {
        mass = newMass;
    }
}

let pebble = new Rock();
console.log(pebble.getMass()); // outputs 0
pebble.setMass(1);
console.log(pebble.getMass()); // outputs 1
```
### Prototypes
```javascript
// Adding Properties to the Function Class using Prototyping

function Shape(height, width) {
    this.height = height;
    this.width = width;
}

let square = new Shape(10, 10);

// add the new property
Shape.prototype.depth = 0;

let cube = new Shape(10, 10);
cube.depth = 10;

// check the properties of each
for (let prop in square) {
    if (square.hasOwnProperty(prop)) {
        console.log(`square HAS the ${prop} property.`);
    } else {
        console.log(`square DOES NOT HAVE the ${prop} property.`);
    }
}

for (let prop in cube) {
    if (cube.hasOwnProperty(prop)) {
        console.log(`cube HAS the ${prop} property.`);
    } else {
        console.log(`cube DOES NOT HAVE the ${prop} property.`);
    }
}

/*
Outputs
=======
square HAS the height property.
square HAS the width property.
square DOES NOT HAVE the depth property.
cube HAS the height property.
cube HAS the width property.
cube HAS the depth property.
*/


// Creating New Objects with Prototype
// starting with a constructor
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = email;
}

Person.prototype = {
    age: 0,
    greet: function() {
        return `Hello, my name is ${this.firstName}`;
    },
    birthday: function() {
        this.age++;
    }
}

let jacob = new Person("Jacob", "Smoke", "jake@lostnowhere.net");
jacob.age = 230;
console.log(jacob.greet());
jacob.birthday();
console.log(`${jacob.firstName} ${jacob.lastName} is ${jacob.age} years old.`);

/*
Outputs
=======
Hello, my name is Jacob
Jacob Smoke is 231 years old.
*/

// Constructor Desctruction
// when the prototype is set, the constructor can be destroyed. 
// therefore, when generating the new prototype, set the constructor.

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype = {
    constructor: Book,
    numberPages: 0,
    read: function() {
        console.log(`Currently reading ${this.title} by ${this.author}`);
    }
}

// testing if the prototype controls the object
let shining = new Book("The Shining", "Stephen King");
const protoCheck = Book.prototype.isPrototypeOf(shining);
console.log(protoCheck); // outputs true

let taleOfTwoCities = new Book("A Tale of Two Cities", "Charles Dickens");
console.log(taleOfTwoCities.constructor === Book); //outputs true

```
### Inheritance
```javascript
// Inheritance Using Prototypes

// several key steps need to be used
// for this example, we will create a new Animal type that
// will be the parent for other object types

function Animal(name) {
    this.name = name;
}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log(`${this.name} eats!`);
    },
    sleep: function(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

function Dog(name) {
    this.name = name;
}

function Cat(name) {
    this.name = name;
}

// to inherit, we set the prototype for each new object
// to the Animal using Object.create(...)

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);

// let's test

let fido = new Dog("Fido");
fido.eat();
fido.sleep(10);


// set the constructor
Dog.prototype.constructor = Dog;

// add methods
Dog.prototype.hunt = function() {
    console.log(`${this.name} starts sniffing around.`);
};

// override methods
Dog.prototype.sleep = function(hours) {
    console.log(`${this.name} sleeps with one eye open for ${hours} hours.`);
}

let snuffles = new Dog("Snuffles");
snuffles.eat();
snuffles.sleep(4);
snuffles.hunt();

/*
Outputs
=======
Snuffles eats!
Snuffles sleeps with one eye open for 4 hours.
Snuffles starts sniffing around.
*/

```
### Mixins
```javascript
// Mixins to Add Properties

// Mixins are interesting functions that are used to add
// the same functionality to disparate objects.

function Coin(denomonation){
    this.denomonation = denomonation;
}

function Star(name, lightYearsAway) {
    this.name = name;
    this.lightYearsAway = lightYearsAway;
}

Star.prototype = {
    constructor: Star,
    fuse: function() {
        console.log(`${this.name} is making new atoms using nuclear fusion.`);
    }
}

// Create the Mixin to give the ability to shine for both
// Stars and Coins

function shineMixin(obj) {
    obj.shine = function() {
        console.log("Shining Bright!!");
    }
}

let penny = new Coin(0.01);
let proxima = new Star("Proxima Centauri", 4);

shineMixin(penny);
shineMixin(proxima);

console.log("Penny\n=====");
penny.shine();
console.log("\nProxima\n=======");
proxima.shine();
proxima.fuse();

/*
Outputs
=======
Penny
=====
Shining Bright!!

Proxima
=======
Shining Bright!!
Proxima Centauri is making new atoms using nuclear fusion.
*/

// Creating Modules of Mixins Using Anonymous Methods
let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
          obj.isCute = function() {
          return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
    }
  })();

  
```
### Private Members Using let
```javascript
// Example of Private Members 
// Using let

var Person = function(firstAndLast) {
    let firstName = undefined;
    let lastName = undefined;
    // Only change code below this line
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = function(firstAndLast) {
      const spName = firstAndLast.split(" ");
      firstName = spName[0];
      lastName = spName[1];    
    };
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstName + " " + lastName;
    }
    this.setFullName(firstAndLast);
};
```
## Functional Programming
### Passing Functions as Arguments
```javascript
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

```
### map
```javascript
// Map Function

// used to iterate over a collection to create a new collection
// applying a tranform for each element

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(n => n * 2);
console.log(doubleNumbers); // outputs [ 2, 4, 6, 8, 10 ]


const people = [{
        firstName: "Jimmy",
        lastName: "Dubnar",
        id: "812381A"
    },
    {
        firstName: "Sheryl",
        lastName: "Lois",
        id: "898148B"
    }
];

const refactoredPeople = people.map(person => ({
    name : person.firstName + " " + person.lastName,
    id: person.id
}));

console.log(refactoredPeople);
/*
Outputs
=======
[
  { name: 'Jimmy Dubnar', id: '812381A' },
  { name: 'Sheryl Lois', id: '898148B' }
]
*/
```
### filter
```javascript
// Filter Function on Collections
// similar to map but returns an array where each element
// satisfies a boolean condition

const numberSeries = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
var filteredNumberSeries = numberSeries.filter(n => (n + 1) % 3 === 0);
console.log(filteredNumberSeries); // outputs [ 2, 5, 11, 17, 23, 29 ]

// filter to map
const myPeople = [
    {firstName: "Doug", lastName: "Sheridan", manager: "Peter", id: 18238},
    {firstName: "Megan", lastName: "Peterson", manager: "Linda", id: 23535},
    {firstName: "Christine", lastName: "Harrison", manager: "Peter", id: 84929},
    {firstName: "Daryl", lastName: "Harris", manager: "Linda", id: 24992},
    {firstName: "Mike", lastName: "Miller", manager: "Peter", id: 94929},
    {firstName: "Brandon", lastName: "Bosch", manager: "Peter", id: 12737},
    {firstName: "Nigel", lastName: "Moses", manager: "Doug", id: 29394},
    {firstName: "Tony", lastName: "Livingston", manager: "Hollis", id: 84929}
];

// get all managed by Peter but just output their names and ID
var filteredPeople = myPeople.filter(person => person.manager === "Peter");
filteredPeople = filteredPeople.map(person => ({
    name: person.firstName,
    id: person.id
}));

console.log(filteredPeople);
/*
Outputs
=======
[
  { name: 'Doug', id: 18238 },
  { name: 'Christine', id: 84929 },
  { name: 'Mike', id: 94929 },
  { name: 'Brandon', id: 12737 }
]
*/


// filtering from a prototype

Array.prototype.numberFilter = function(condition) {
    let filtered = [];
    for (var i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
var protoFiltered = numbers.numberFilter(n => (n + 1) % 5 === 0);
console.log(protoFiltered); // outputs [ 4, 64 ]


// using filter to remove elements from an array
// provided one or more additional arguments
function removeElements(arr) {
    let sourceArray = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      sourceArray = sourceArray.filter(x => x !== arguments[i]);
    }
    return sourceArray;
}
const startingArray = ["a", 1929, 13, 10, false, "saffron"];
const clearedArray = removeElements(startingArray, 10, "a");
console.log(clearedArray); // outputs [ 1929, 13, false, 'saffron' ]
```
### sort
```javascript
// Sorting Arrays

// string sorts can use the .sort() method
let myStringArray = ["beth", "avery", "xander", "colin", "jasper", "adam"];
myStringArray.sort();
console.log(myStringArray); 
// ^^^ outputs [ 'adam', 'avery', 'beth', 'colin', 'jasper', 'xander' ]

// sorting numbers does require a pattern that involves the anonymous
// method to the sorting function
let myNumberArray = [29, 234, 943, 61, 21, 467, 2, 91];
myNumberArray.sort((a, b) => a - b);
console.log(myNumberArray); 
/*
Outputs
=======
[
   2,  21,  29,  61,
  91, 234, 467, 943
]
*/

// as you can see, the sort mutates the method.

// Non Mutating Sort Method
Array.prototype.nonMutatingSort = function() {
    const tempArray = [...this];
    tempArray.sort((x, y) => x - y);
    return tempArray;
};

const mySecondNumberArray = [7, 3, 1, 2, 9, 4, 8, 5, 6];
const mySortedNumbers = mySecondNumberArray.nonMutatingSort();
console.log(mySecondNumberArray);
/*
Outputs
=======
[
  7, 3, 1, 2, 9,
  4, 8, 5, 6
]
*/

console.log(mySortedNumbers);/*
Outputs
=======
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

```
### split and join
```javascript
// Split and Join

// split() - creates an array from a string specifying a delimiter
const simpleString = "The quick brown fox jumps over the lazy dog.";
const simpleArray = simpleString.split(" "); // the space is the delimiter
console.log(simpleArray);
/*
Outputs
=======
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]
*/

// spliting using regular expressions
const complexString = "To-be*or-not&to+be";
const complexArray = complexString.split(/\W/);
console.log(complexArray);
/*
Outputs
=======
[ 'To', 'be', 'or', 'not', 'to', 'be' ]
*/

// Join Function
// the join(...) operation takes an array and generates a string
// adding a delimiter between each element in the resulting
// scalar string value
const strArray = ["There", "is", "something", "under", "the", "bed."];
const strFromArray = strArray.join(" "); // separates each element with a space
console.log(strFromArray); // outputs There is something under the bed.


// using reduce, split, and join to make a hypen delimited
// lower case title

function formatText(text) {
    let arr = text.split(/\W+/);
    arr = arr.map(i => i.toLowerCase());
    
    let clearArr = arr.reduce((a, i) => {
      if (i !== "") {
        a.push(i);
      }
      return a;
    }, []);

    return clearArr.join("-");
  }

  console.log(formatText("This is how I see, how I see things."));
  // ^^^ outputs this-is-how-i-see-how-i-see-things
```
### every and some
```javascript
// Every function
// tests if all elements in an array meet a specific criteria

const arrEvens = [2, 4, 18, 20, 1203912, 32, 100];
const maybes = [2, 4, 18, 27, 64, 834996, 101];

const isAllEvens1 = arrEvens.every(n => n % 2 === 0);
const isAllEvens2 = maybes.every(n => n % 2 === 0);

console.log(`${arrEvens} all evens? ${isAllEvens1}`); 
// ^^^ outputs 2,4,18,20,1203912,32,100 all evens? true

console.log(`${maybes} all evens? ${isAllEvens2}`); 
// ^^^ outputs 2,4,18,27,64,834996,101 all evens? false

// Some Function
// the some array function checks if any of the elements meet 
// specific criteria.
const isSomeEven1 = arrEvens.some(n => n % 2 === 0);
const isSomeEven2 = maybes.some(n => n % 2 === 0);


console.log(`${arrEvens} has some evens? ${isSomeEven1}`); 
// ^^^ outputs 2,4,18,20,1203912,32,100 has some evens? true

console.log(`${maybes} has some evens? ${isSomeEven2}`); 
// ^^^ outputs 2,4,18,27,64,834996,101 has some evens? true
```
### Curried Functions
```javascript
// Curried Functions
// returns a reference to another function that can access
// all parameters in scope

function sum(x) {
    return function(y) {
        return x + y;
    }
}

// the format is func(firstParam)(secondParam)
console.log(sum(5)(10)); // outputs 15
```
## Fun Snippets
### Palindrome Checker
```javascript
// Check if a String is a Palindrome
// returns true or false

function isPalindrome(str) {
    let strCopy = str.toLowerCase();
    let strArray = strCopy.split("");
    strArray = strArray.filter(s => /\w+/.test(s) && s !== " " && s !== "_");
    strCopy = strArray.join("");
    let strBackwardsArray = [];
    for (var i = 0; i < strArray.length; i++) {
      strBackwardsArray.unshift(strArray[i]);
    }
    let strBackwards = strBackwardsArray.join("");
    return strCopy === strBackwards;
}
  
```
### Number to Roman Numeral Converter
```javascript
// Number to Roman Numberal Converter
// e.g. 39 = "XXXIX"
const romanMap = {
    "3000": "MMM",    "2000": "MM",    "1000": "M",
    "900": "CM",    "800": "DCCC",
    "700": "DCC",    "600": "DC",
    "500": "D",    "400": "CD",
    "300": "CCC",    "200": "CC",
    "100": "C",    "90": "XC",
    "80": "LXXX",    "70": "LXX",
    "60": "LX",    "50": "L",
    "40": "XL",    "30": "XXX",
    "20": "XX",    "10": "X",
    "9": "IX",    "8": "VIII",
    "7": "VII",    "6": "VI",
    "5": "V",    "4": "IV",
    "3": "III",    "2": "II",
    "1": "I"
};

function convertToRoman(num) {
   const strNum = String(num);
   const strNumArray = strNum.split("");
   // go from left to right
   let romans = "";
   for (var i = 0; i < strNumArray.length; i++) {
     if (strNumArray[i] !== "0") {
      let s = strNumArray[i];
      for (var j = 0; j < strNumArray.length - (i + 1); j++) {
        s += "0";
      }
      romans += romanMap[s];
     }
   }
   return romans;
}
```
### Caesar Cipher
```javascript
// Caesar Cipher - ROT13
// decrypt upper case characters with a 13 character differential

function decryptCaesar(str) {
    let converted = "";
    for (var s of str) {
      if (/\W+/.test(s)) {
        converted += s;
      } else {
        let code = s.charCodeAt(0);
        code = (((code + 13) % 91) % 65) + 65;
        converted += String.fromCharCode(code);
      }
    }
    console.log(converted);
    return converted;
}

```
### Cash Register
```javascript
// Cash Register Processor
// takes in a price, cash paid, and the amount in the 
// cash register (CID) to determine change.

const moneyMap = [
    ["ONE HUNDRED", 100.00],  
    ["TWENTY", 20.00],  
    ["TEN", 10.00],  
    ["FIVE", 5.00],  
    ["ONE", 1.00],  
    ["QUARTER", 0.25],
    ["DIME", 0.10],  
    ["NICKEL", 0.05000],  
    ["PENNY", 0.010000]    
];
  
function checkCashRegister(price, cash, cid) {
    var retVal = {};
    var change = cash - price;
    var totalCID = getTotalCID(cid);
    console.log(totalCID);
    console.log(`Price: ${price} Change: ${change}`);
    if (change < 0 || totalCID < change) {
      retVal = {
        status: "INSUFFICIENT_FUNDS", change: []
      };
    } else if (change === totalCID) {
      retVal = {
        status: "CLOSED",
        change: cid
        };
    } else {
        const changeMade = makeChange(change, cid);
        if (changeMade.length === 0) {
          retVal = {
            status: "INSUFFICIENT_FUNDS",
            change: []
          };
        } else {
          retVal = {
            status: "OPEN",
            change: changeMade
          };
        }
    }
    return retVal;
}

function getSpecificCID(cid, key) {
    for (var i = 0; i < cid.length; i++) {
      if (cid[i][0] === key) {
        return cid[i][1];
      }
    }
    return 0;
}

function makeChange(changeDue, cid) {
    var change = [];
    for (var i = 0; i < moneyMap.length; i++) {
      let mapType = moneyMap[i][0];
      let mapAmt = moneyMap[i][1];
      if (changeDue >= mapAmt) {
        let changeAmt = getSpecificCID(cid, mapType);
        if (changeDue >= changeAmt) {
          change.push([mapType, changeAmt])
          changeDue -= changeAmt;
        } else if (changeDue < changeAmt && changeAmt > 0) {
          let changeQuot = changeDue / mapAmt;
          if (mapType === "PENNY") {
            changeQuot = Math.round(changeQuot);
          }
          let changeUnits = parseInt(changeQuot);
          let changeUnitAmt = changeUnits * mapAmt;
          change.push([mapType, changeUnitAmt]);
          changeDue -= changeUnitAmt;
        }
      }
    }
    return changeDue > 0 ? [] : change;
}
  
function getTotalCID(cid) {
    let total = 0.00;
    for (var i = 0; i < cid.length; i++) {
        total += cid[i][1]; 
    }
    return total;
}

```
