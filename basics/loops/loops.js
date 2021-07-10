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