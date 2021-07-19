// Console Output

// console.log(x) to output variable or other information
let a = 6;
let b = 7;
let c = a + b;
console.log(b); // outputs 13

// console.clear() to clear the log
console.clear();

// Type Determination Using typeof
// typeof(x) determines the type of the variable
const testVars = ["hello", 15, 20.23, true];
for (var i = 0; i < testVars.length; i++) {
    console.log(`${testVars[i]} - ${typeof(testVars[i])}`);
}

/*
Outputs
=======
hello - string
15 - number
20.23 - number
true - boolean
*/