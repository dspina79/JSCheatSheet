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