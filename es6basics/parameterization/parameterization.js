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