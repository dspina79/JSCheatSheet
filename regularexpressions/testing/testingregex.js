// Testing Regex

// using regular expressions to test whether a source string
// has the regular expression pattern
const mySentence = "The quick brown fox jumps over the lazy dog.";

// simple regex patterns to look for specific words - in between "/"
const regexQuick = /quick/; // match "quick"
const regexBlue = /blue/; // match "blue"

const resultQuick = regexQuick.test(mySentence);
const resultBlue = regexBlue.test(mySentence);

console.log(`Result of regexQuick: ${resultQuick}`); // output true
console.log(`Result of regexBlue: ${resultBlue}`); // outut false


// testing for multiple exclusive matches
// e.g. find any of the following using "|" between terms

const regexRocks = /sedimentary|igneous|metamorphic/
const rachelFinds = "Rachel discovered some igneous rocks.";
const markFinds = "Mark found some metamorphic rocks";
const helenFinds = "Helen found some meta-metals!";

const rachelResult = regexRocks.test(rachelFinds);
const markResult = regexRocks.test(markFinds);
const helenResult = regexRocks.test(helenFinds);

console.log(`Rachel result: ${rachelResult}`); // outputs true
console.log(`Mark result: ${markResult}`); // outputs true
console.log(`Helen result: ${helenResult}`); // outputs false