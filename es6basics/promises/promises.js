// Promises

// variable used in later examples
var myToken = "sample";

// basic promise structure
const myPromise = new Promise((resolve, reject) => {
    if (myToken === "sample") {
        resolve("Successful token received.");
    } else {
        reject("Token was not received or in the correct format.");
    }
});

// use then to check the results from the promise
myPromise.then(result => {
    console.log(result); // outputs "Successful token received."
});

// now change the variable to an invalid data
myToken = "NOT_VALID";

const mySecondPromise = new Promise((resolve, reject) => {
    if (myToken === "sample") {
        resolve("Successful token received.");
    } else {
        reject("Token was not received or in the correct format.");
    }
});

// set the promise output to catch errors on rejection
mySecondPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error); // outputs Token was not received or in the correct format.
});