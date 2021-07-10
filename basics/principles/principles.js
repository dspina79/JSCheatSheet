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