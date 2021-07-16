// Spread Operator (...)
// references all components in an object or array

const myArray = [1,3,7,9,11];

// copy the elmeents into a new array
const mySecondArray = [...myArray];

console.log(myArray); // outputs [1,3,7,9,11]
console.log(mySecondArray); // outputs [1,3,7,9,11]
// compare using stringify for equality
console.log(JSON.stringify(myArray) === JSON.stringify(mySecondArray)); // true

// the spread operator can be used for simple object cloning

const person1 = {
    firstName: "Lou",
    lastName: "Sheridan",
    email: "lousher@xnowherey.net"
};

const person2 = {...person1}; // cloning

person2.firstName = "Christine";
person2.email = "csher@xnowherey.net";

console.log(person1); 
/*
Outputs
=======
{
  firstName: 'Lou',
  lastName: 'Sheridan',
  email: 'lousher@xnowherey.net'
}
*/

console.log(person2); 
/*
Outputs
=======
{
  firstName: 'Christine',
  lastName: 'Sheridan',
  email: 'csher@xnowherey.net'
}
*/
