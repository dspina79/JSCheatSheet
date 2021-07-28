// Map Function

// used to iterate over a collection to create a new collection
// applying a tranform for each element

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(n => n * 2);
console.log(doubleNumbers); // outputs [ 2, 4, 6, 8, 10 ]


const people = [{
        firstName: "Jimmy",
        lastName: "Dubnar",
        id: "812381A"
    },
    {
        firstName: "Sheryl",
        lastName: "Lois",
        id: "898148B"
    }
];

const refactoredPeople = people.map(person => ({
    name : person.firstName + " " + person.lastName,
    id: person.id
}));

console.log(refactoredPeople);
/*
Outputs
=======
[
  { name: 'Jimmy Dubnar', id: '812381A' },
  { name: 'Sheryl Lois', id: '898148B' }
]
*/