// Filter Function on Collections
// similar to map but returns an array where each element
// satisfies a boolean condition

const numberSeries = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
var filteredNumberSeries = numberSeries.filter(n => (n + 1) % 3 === 0);
console.log(filteredNumberSeries); // outputs [ 2, 5, 11, 17, 23, 29 ]

// filter to map
const myPeople = [
    {firstName: "Doug", lastName: "Sheridan", manager: "Peter", id: 18238},
    {firstName: "Megan", lastName: "Peterson", manager: "Linda", id: 23535},
    {firstName: "Christine", lastName: "Harrison", manager: "Peter", id: 84929},
    {firstName: "Daryl", lastName: "Harris", manager: "Linda", id: 24992},
    {firstName: "Mike", lastName: "Miller", manager: "Peter", id: 94929},
    {firstName: "Brandon", lastName: "Bosch", manager: "Peter", id: 12737},
    {firstName: "Nigel", lastName: "Moses", manager: "Doug", id: 29394},
    {firstName: "Tony", lastName: "Livingston", manager: "Hollis", id: 84929}
];

// get all managed by Peter but just output their names and ID
var filteredPeople = myPeople.filter(person => person.manager === "Peter");
filteredPeople = filteredPeople.map(person => ({
    name: person.firstName,
    id: person.id
}));

console.log(filteredPeople);
/*
Outputs
=======
[
  { name: 'Doug', id: 18238 },
  { name: 'Christine', id: 84929 },
  { name: 'Mike', id: 94929 },
  { name: 'Brandon', id: 12737 }
]
*/


// filtering from a prototype

Array.prototype.numberFilter = function(condition) {
    let filtered = [];
    for (var i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
var protoFiltered = numbers.numberFilter(n => (n + 1) % 5 === 0);
console.log(protoFiltered); // outputs [ 4, 64 ]


// using filter to remove elements from an array
// provided one or more additional arguments
function removeElements(arr) {
    let sourceArray = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      sourceArray = sourceArray.filter(x => x !== arguments[i]);
    }
    return sourceArray;
}
const startingArray = ["a", 1929, 13, 10, false, "saffron"];
const clearedArray = removeElements(startingArray, 10, "a");
console.log(clearedArray); // outputs [ 1929, 13, false, 'saffron' ]