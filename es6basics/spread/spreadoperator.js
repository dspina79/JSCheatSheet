// Spread Operator (...)
// references all components in an object or array

const myArray = [1,3,7,9,11];

// copy the elmeents into a new array
const mySecondArray = [...myArray];

console.log(myArray); // outputs [1,3,7,9,11]
console.log(mySecondArray); // outputs [1,3,7,9,11]
// compare using stringify for equality
console.log(JSON.stringify(myArray) === JSON.stringify(mySecondArray)); // true