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

// Join Function
// the join(...) operation takes an array and generates a string
// adding a delimiter between each element in the resulting
// scalar string value
const strArray = ["There", "is", "something", "under", "the", "bed."];
const strFromArray = strArray.join(" "); // separates each element with a space
console.log(strFromArray); // outputs There is something under the bed.


// using reduce, split, and join to make a hypen delimited
// lower case title

function formatText(text) {
    let arr = text.split(/\W+/);
    arr = arr.map(i => i.toLowerCase());
    
    let clearArr = arr.reduce((a, i) => {
      if (i !== "") {
        a.push(i);
      }
      return a;
    }, []);

    return clearArr.join("-");
  }

  console.log(formatText("This is how I see, how I see things."));
  // ^^^ outputs this-is-how-i-see-how-i-see-things