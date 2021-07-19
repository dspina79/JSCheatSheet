// Repeating Counts
// indicating how often a term must appear in order for a match

// format /x{min,max}/ - indicates min an max repeats of 'x'
// format /x{min,}/ - indicates only a minumum number
// format /x{,max}/ - indicates a maximum number
// format /x{n}/ - indicates a specific number

const betweenThreeAndFiveORegex = /Wo{3,5}rd/;
const atLeastThreeORegex = /Wo{3,}rd/;
const exactlyFourRegex = /Wo{4}rd/;

const myWords = ["Word", "Woord", "Wooord", "Woooord", 
                    "Wooooord", "Woooooord"];

for (var i = 0; i < myWords.length; i++) {
    console.log(`\n${myWords[i]}`);
    console.log("/Wo{3,5}rd/ = " + betweenThreeAndFiveORegex.test(myWords[i]));
    console.log("/Wo{3,}rd/ = " + atLeastThreeORegex.test(myWords[i]));
    console.log("/Wo{4}rd/ = " + exactlyFourRegex.test(myWords[i]));
}

/*
Outputs
=======

Word
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Woord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Wooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = true

Wooooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooooord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = true
/Wo{4}rd/ = false
*/

// Look Aheads with ?= and ?!
// ?= match the pattern somewhere in the code
// ?! do not match the pattern anywhere in the pattern

const containsThreeWhitespaces = /(?=\s{3})/; //contains at least three consecutive white spaces
const doesNotContainThreeWhitespaces = /(?!\s{3})/; // does not match any instance of 3 whitespaces
const testWhitespacePattern1 = "This is a pattern with   a couple of spaces.";
const testWhitespacePattern2 = "This one has single spaces";

console.log(containsThreeWhitespaces.test(testWhitespacePattern1)); // outputs true
console.log(containsThreeWhitespaces.test(testWhitespacePattern2)); // outputs false

console.log(doesNotContainThreeWhitespaces.test(testWhitespacePattern1)); 
// ^^ outputs true because there are instances of non-three-repeating whitespace characters
console.log(doesNotContainThreeWhitespaces.test(testWhitespacePattern2)); // outputs true

// Example of complex lookaheads
const simpleUsernameCheck = /\w+@(?=\D{3}\d{2})/; // username must be some text followed by @ then 3 nondigits followed by 2 digits
const usernameChecks = ["brian@som33", "david.wilkes@oldie", "a8s9f79.sjf22", "laura@hp222"];
for (var i = 0; i < usernameChecks.length; i++) {
    console.log(`${usernameChecks[i]}: ${simpleUsernameCheck.test(usernameChecks[i])}`);
}