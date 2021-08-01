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
