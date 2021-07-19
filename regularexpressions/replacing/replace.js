// Simple Replacements with Regular Expressions

// replace each instance of Hello with Goodbye

const helloRegex = /hello/ig;
const sentence = "The art of saying hello without saying 'hello'";
const newSentence = sentence.replace(helloRegex, "Goodbye");
console.log(newSentence);
