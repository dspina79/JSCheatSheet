// new variable declartion option: let

// "let" variables are only available in the scope 
// of their declaration

{
var myVarName = "Dave";
let myLetName = "Dean";
} // using brackets to isolate scope

function printOutput() {
    try {
        if (myVarName !== undefined) {
            console.log("myVarName is present and is " + myVarName);
        }
    } catch(err) {
        console.log("Accessing myVarName caused an error: " + err); // should not fire
    }
    try {
        if (myLetName !== undefined) {
            console.log("myLetName is present and is " + myLetName);
        }
    } catch(err) {
        console.log("Accessing myLetVarName caused an error: " + err); // should fire    
    }
}

printOutput();

// const keyword - stopping resassignment of a variable
// note: const variables should be all caps with _ between words

const X_ELEMENT = 50;

try {
    X_ELEMENT = 20; // illegal
} catch (error) {
    console.log(error); // this will output
}

// objects and arrays that are constant are mutable
// they cannot be reassigned

const SOME_PERSON = {
    firstName: "Dean",
    lastName: "Smith",
    age: 30
};

SOME_PERSON.age++; // legal

console.log(SOME_PERSON);

// same is true for constant arrays
const SAMPLE_NUMBERS = [1,2,3,4,5];
console.log("Numbers before mutation:");
console.log(SAMPLE_NUMBERS); //1,2,3,4,5
SAMPLE_NUMBERS[2] = 100;
console.log("Numbers after mutation:");
console.log(SAMPLE_NUMBERS); //1,2,100,4,5


// Object.freeze will stop an object or array from mutation
const FROZEN_ARRAY = [1,2,3,4,5];
const FROZEN_PERSON = {
    firstName: "Dean",
    lastName: "Wilson",
    age: 35
};
Object.freeze(FROZEN_ARRAY);
Object.freeze(FROZEN_PERSON);

try {
    FROZEN_ARRAY[1] = 15; // won't change
    console.log(FROZEN_ARRAY); // outputs 1,2,3,4,5
} catch(error) {
    console.log("Error caught when attempting array update: " + error);
}

try {
    FROZEN_PERSON.age = 50; // won't change
    console.log(FROZEN_PERSON); // outputs Dean Smith Age 35, not 50
} catch(error) {
    console.log("Error caught when attempting object update: " + error);
}