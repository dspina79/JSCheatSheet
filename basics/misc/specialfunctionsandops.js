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