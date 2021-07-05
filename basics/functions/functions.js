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