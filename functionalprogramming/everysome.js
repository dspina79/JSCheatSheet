// Every function
// tests if all elements in an array meet a specific criteria

const arrEvens = [2, 4, 18, 20, 1203912, 32, 100];
const maybes = [2, 4, 18, 27, 64, 834996, 101];

const isAllEvens1 = arrEvens.every(n => n % 2 === 0);
const isAllEvens2 = maybes.every(n => n % 2 === 0);

console.log(`${arrEvens} all evens? ${isAllEvens1}`); 
// ^^^ outputs 2,4,18,20,1203912,32,100 all evens? true

console.log(`${maybes} all evens? ${isAllEvens2}`); 
// ^^^ outputs 2,4,18,27,64,834996,101 all evens? false

// Some Function
// the some array function checks if any of the elements meet 
// specific criteria.
const isSomeEven1 = arrEvens.some(n => n % 2 === 0);
const isSomeEven2 = maybes.some(n => n % 2 === 0);


console.log(`${arrEvens} has some evens? ${isSomeEven1}`); 
// ^^^ outputs 2,4,18,20,1203912,32,100 has some evens? true

console.log(`${maybes} has some evens? ${isSomeEven2}`); 
// ^^^ outputs 2,4,18,27,64,834996,101 has some evens? true