# JavaScript Cheat Sheet
## Arrays
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
## Functions
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
## Conditionals
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
## Objects
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
```
