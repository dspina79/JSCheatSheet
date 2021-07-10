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
