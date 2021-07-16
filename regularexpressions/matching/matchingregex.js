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

