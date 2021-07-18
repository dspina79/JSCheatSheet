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
// must have one or more times
console.log("work".match(/r+/gi)); // outputs ['r']
console.log("pizza".match(/z+/gi)); // outputs ['zz']
console.log("Mississippi".match(/s+/gi)); // ['ss', 'ss']
console.log("New York".match(/s+/gi)); // outputs null
console.log("permission".match(/is+/g)); // outputs [ 'iss' ]
console.log("Lisa".match(/is+/g)); // outputs [ 'is' ]
console.log("posse".match(/is+/g)); // outputs null

// matching one or more of the same character
console.log("Gooooooooaallll!".match(/Go*/g)); // outputs [ 'Goooooooo' ]
console.log("Goodwill".match(/Go*/g)); // outputs ['Goo']
console.log("Gallop!".match(/Go*/g)); // outputs ['G']
console.log("Doooone!".match(/Go*/g)); // outputs null

// lazy matching using the ? to find the smallest match
const nonLazyMatchRegex = /@[a-z]+x/;
const lazyMatchRegex = /@[a-z]+?x/;
const testLazyMatching = ['@alex', 'alex', '@brimaxex', '@logan', '@x'];
for (var i = 0; i < testLazyMatching.length; i++) {
    let resultNonLazy = testLazyMatching[i].match(nonLazyMatchRegex);
    let resultLazy = testLazyMatching[i].match(lazyMatchRegex);
    console.log(`\n${testLazyMatching[i]}`);
    console.log(`Non Lazy: ${resultNonLazy}`);
    console.log(`Lazy: ${resultLazy}`);
}
/*
Outputs
=======
@alex
Non Lazy: @alex
Lazy: @alex

alex
Non Lazy: null
Lazy: null

@brimaxex
Non Lazy: @brimaxex
Lazy: @brimax

@logan
Non Lazy: null
Lazy: null

@x
Non Lazy: null
Lazy: null
*/

// matching with start ^ and end $
// note ^ in a list denotes "do not find" while at the 
// beginning of an expression means "starging with"
const newSentencePattern = "Abel's username is @abe and his other username is @axeld. His email is abe@xnowhere.net";
const usernameExample = "@abel";
const emailExample = "john@xnowhere.net"
const startingAtRegex = /^@[a-d]+/g; // find all matches starting with @ followed by letters a-d
const endingAtRegex = /^[a-z]+@xnowhere.net$/gi; //starting with any letter and ending with @

const startingResult = newSentencePattern.match(startingAtRegex);
console.log(startingResult); // returns null because the sentence does not start with the correct criteria
const endingResult = newSentencePattern.match(endingAtRegex);
console.log(endingResult); // returns null because the sentence does not meet the start criteria 

console.log(usernameExample.match(startingAtRegex)); // outputs [ '@ab']
console.log(emailExample.match(endingAtRegex)); // outputs [ 'john@xnowhere.net' ]

// optional use of character with ?
// indicates the preceeding element may be included (0 or 1)

const optionalElement = /Michell?e/; // handles optional l for the name "Michelle" or "Michele"
const michelles = ["Michelle", "Michele", "Michellle"];
for (var i = 0; i < michelles.length; i++) {
    console.log(`${michelles[i]}: ${optionalElement.test(michelles[i])}`);
}

/*
Outputs
=======
Michelle: true
Michele: true
Michellle: false
*/