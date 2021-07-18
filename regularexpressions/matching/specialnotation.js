// Special Notations

// \w = alphanumeric characters = [A-Za-z0-9_]
const basicSentence = "The quick brown fox jumps over the lazy dog.";
const wordRegex = /\w+/g; // if you do not add the + it will count each letter

// count the number of words in the setence
const wordCount = basicSentence.match(wordRegex).length;
console.log(`The sentence, '${basicSentence}' has ${wordCount} words`);
// outputs: The sentence, 'The quick brown fox jumps over the lazy dog.' has 9 words

// \W = non alphanumeric characters; the opposite of \w
const nonWordRegex = /\W/g;
const nonANCount = basicSentence.match(nonWordRegex).length;
console.log(`The sentence, '${basicSentence}' has ${nonANCount} other characters`);
// outputs: The sentence, 'The quick brown fox jumps over the lazy dog.' has 9 other characters


// \d digit regex = [0-9]
const countDigitsRegex = /\d/g;
const countNumbersRegex = /\d+/g;
const numericContainingSentence = "Julie picked 10 apples and 209 blueberries.";
const digitCount = numericContainingSentence.match(countDigitsRegex).length;
const numberCount = numericContainingSentence.match(countNumbersRegex).length;
console.log(`The sentence, '${numericContainingSentence}', contains ${digitCount} individual digits.`);
// outputs: The sentence, 'Julie picked 10 apples and 209 blueberries.', contains 5 individual digits.

console.log(`The sentence, '${numericContainingSentence}', contains ${numberCount} numbers.`);
// outputs: The sentence, 'Julie picked 10 apples and 209 blueberries.', contains 2 numbers.


// \D = non digit characters
const nonDigitSentence = "I saw 100 dogs, each with 20 white spots.";
console.log(nonDigitSentence.match(/\D/g));
/*
Outputs
=======
[
  'I', ' ', 's', 'a', 'w', ' ', ' ',
  'd', 'o', 'g', 's', ',', ' ', 'e',
  'a', 'c', 'h', ' ', 'w', 'i', 't',
  'h', ' ', ' ', 'w', 'h', 'i', 't',
  'e', ' ', 's', 'p', 'o', 't', 's',
  '.'
]
*/

// Whitespace Characters: \s
const sameSentence = "The quick brown fox jumps over the lazy dog.";
const whitespaceRegex = /\s+/g;
const whitespaceResults = sameSentence.match(whitespaceRegex);
console.log(whitespaceResults.length); // outputs 8

// \S = non whitespace characters
const nonWhitespaceRegex = /\S+/g;
console.log(sameSentence.match(nonWhitespaceRegex).length); // outputs 9 (words)

