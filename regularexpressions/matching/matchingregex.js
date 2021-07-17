// Regex Pattern Matching

// different than testing
// actually finds the matching element in the string

const mySentence = "The quick brown fox jumps over the lazy dog.";
const regexQuick = /QUICK/i;

const matchingQuick = mySentence.match(regexQuick);
console.log(matchingQuick); 
/*
    The above outputs:
    [
        'quick',
        index: 4,
        input: 'The quick brown fox jumps over the lazy dog.',
        groups: undefined
    ]
*/

// matching multiple outputs
const secondString = "Doug, the barber, worked at the barber shop for 10 years.";
const secondRegEx = /barber/gi;
const secondResult = secondString.match(secondRegEx);
console.log(secondResult); // outputs [ 'barber', 'barber' ]

// matching with an optional character using .
const optionalCharRegEx = /d.g/;
const stringChecks = ['dog', 'dug', 'up', 'dg', 'dig', 'ape'];
for (var i = 0; i < stringChecks.length; i++) {
    let str = stringChecks[i];
    let regexTest = optionalCharRegEx.test(str);
    console.log(`${str} : ${regexTest}`);
}

/*
Outputs:
dog : true
dug : true
up : false
dg : false
dig : true
ape : false
*/

// match all specific characters
const specificCharRegex = /wh[eao]m/gi; // gi indicates all matches ignoring case
const fourthSentence = "Whom is in the east of wham when John whishes?";
const fourthMathResult = fourthSentence.match(specificCharRegex);
console.log(fourthMathResult); // outputs [ 'Whom', 'wham' ]

// matching character ranges using [letter-letter]
// example
const alphabetRegex = /[a-z]/gi; // matches all letters a-z case insensitve
const myLongSentence = "Brian and Peter went to 100 main street.";
const longSentenceResults = myLongSentence.match(alphabetRegex);
console.log(longSentenceResults);

/*
Outputs (note there is no match on the numbers)
===============================================
[
  'B', 'r', 'i', 'a', 'n', 'a',
  'n', 'd', 'P', 'e', 't', 'e',
  'r', 'w', 'e', 'n', 't', 't',
  'o', 'm', 'a', 'i', 'n', 's',
  't', 'r', 'e', 'e', 't'
]
*/

// matching letters and numbers
const myAlphaNumericRegex = /[a-z0-9]/gi; // matches all letters and numbers
const longSentenceAlphaNumericResult = myLongSentence.match(myAlphaNumericRegex);
console.log(longSentenceAlphaNumericResult);

/*
Outputs
=======
  'B', 'r', 'i', 'a', 'n', 'a',
  'n', 'd', 'P', 'e', 't', 'e',
  'r', 'w', 'e', 'n', 't', 't',
  'o', '1', '0', '0', 'm', 'a',
  'i', 'n', 's', 't', 'r', 'e',
  'e', 't'
]
*/

// smaller alpha numeric sets
const mySmallerAlphaNumericRegex = /[a-f0-2]/gi;
const myShorterSentence = "There are 4023 different ways to think about possums.";
const shorterSentenceResult = myShorterSentence.match(mySmallerAlphaNumericRegex);
console.log(shorterSentenceResult);

/*
Outputs
=======
[
  'e', 'e', 'a', 'e',
  '0', '2', 'd', 'f',
  'f', 'e', 'e', 'a',
  'a', 'b'
]
*/

// excluding characters in matches with the ^ to indicate not to match
const excludeHalfAlphabet = /[^n-z]/gi;
const hamlet = "To be, or not to be; that is the question";
const hamletResult = hamlet.match(excludeHalfAlphabet);
console.log(hamletResult);

/*
Outputs - 
notice that even whitespace characters and punctuation appear
=============================================================
[
  ' ', 'b', 'e', ',', ' ',
  ' ', ' ', ' ', 'b', 'e',
  ';', ' ', 'h', 'a', ' ',
  'i', ' ', 'h', 'e', ' ',
  'e', 'i'
]
*/

// Wildcards

// matching any consecutive pattern with +
console.log("work".match(/r+/gi)); // outputs ['r']
console.log("pizza".match(/z+/gi)); // outputs ['zz']
console.log("Mississippi".match(/s+/gi)); // ['ss', 'ss']
console.log("New York".match(/s+/gi)); // outputs null
