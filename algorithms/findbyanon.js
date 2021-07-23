// Find an Element by an Anonymous Function
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
        return arr[i];
        }
    }

    return undefined;
}
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testFunc = (x) => x % 2 === 0 && x % 3 === 0;
const result = findElement(arr, testFunc);
console.log(result); // outputs 6