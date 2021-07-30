// Reduce Function
// takes the values from the array and returns a single (non array)
// value

// it takes two parameters: 
//    1) accumulator
//    2) the reference to an array element

const numberArray = [1, 3, 5, 7, 9];
const total = numberArray.reduce((sum, num) => sum + num, 0); // 0 is the initializer
console.log(total); // outputs 25

// using reduce to generate an object
const myPeople = [
    {firstName: "Jeremy", lastName: "Sheridan", username: "jsheridan", age: 29},
    {firstName: "Linda", lastName: "Pratchett", username: "lindapratt", age: 32},
    {firstName: "Gretchen", lastName: "Yeung", username: "gyeung1", age: 63},
    {firstName: "Molly", lastName: "Thomas", username: "mollthom", age: 34},
    {firstName: "Brian", lastName: "Livingston", username: "brliv", age: 49}
];

const people = myPeople.reduce((newObj, person) => {
    newObj[person.username] = person.firstName + " " + person.lastName;
    return newObj;
}, {});
console.log(people);
/*
Outputs
=======
{
  jsheridan: 'Jeremy Sheridan',
  lindapratt: 'Linda Pratchett',
  gyeung1: 'Gretchen Yeung',
  mollthom: 'Molly Thomas',
  brliv: 'Brian Livingston'
}
*/