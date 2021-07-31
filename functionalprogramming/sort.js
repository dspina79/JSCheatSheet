// Sorting Arrays

// string sorts can use the .sort() method
let myStringArray = ["beth", "avery", "xander", "colin", "jasper", "adam"];
myStringArray.sort();
console.log(myStringArray); 
// ^^^ outputs [ 'adam', 'avery', 'beth', 'colin', 'jasper', 'xander' ]

// sorting numbers does require a pattern that involves the anonymous
// method to the sorting function
let myNumberArray = [29, 234, 943, 61, 21, 467, 2, 91];
myNumberArray.sort((a, b) => a - b);
console.log(myNumberArray); 
/*
Outputs
=======
[
   2,  21,  29,  61,
  91, 234, 467, 943
]
*/

// as you can see, the sort mutates the method.

// Non Mutating Sort Method
Array.prototype.nonMutatingSort = function() {
    const tempArray = [...this];
    tempArray.sort((x, y) => x - y);
    return tempArray;
};

const mySecondNumberArray = [7, 3, 1, 2, 9, 4, 8, 5, 6];
const mySortedNumbers = mySecondNumberArray.nonMutatingSort();
console.log(mySecondNumberArray);
/*
Outputs
=======
[
  7, 3, 1, 2, 9,
  4, 8, 5, 6
]
*/

console.log(mySortedNumbers);/*
Outputs
=======
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
