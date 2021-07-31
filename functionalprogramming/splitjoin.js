// Split and Join

// split() - creates an array from a string specifying a delimiter
const simpleString = "The quick brown fox jumps over the lazy dog.";
const simpleArray = simpleString.split(" "); // the space is the delimiter
console.log(simpleArray);
/*
Outputs
=======
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]
*/

// spliting using regular expressions
const complexString = "To-be*or-not&to+be";
const complexArray = complexString.split(/\W/);
console.log(complexArray);
/*
Outputs
=======
[ 'To', 'be', 'or', 'not', 'to', 'be' ]
*/
