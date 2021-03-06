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