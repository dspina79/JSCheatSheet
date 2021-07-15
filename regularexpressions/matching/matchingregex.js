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
