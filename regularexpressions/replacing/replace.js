// Simple Replacements with Regular Expressions

// replace each instance of Hello with Goodbye

const helloRegex = /hello/ig;
const sentence = "The art of saying hello without saying 'hello'";
const newSentence = sentence.replace(helloRegex, "Goodbye"); 
console.log(newSentence);
// ^^^ outputs The art of saying Goodbye without saying 'Goodbye'

// replace all whitespace with underscores
const spaceRegex = /\s/g;
const underscoreSentence = sentence.replace(spaceRegex, "_");
console.log(underscoreSentence); 
// ^^^ outputs The_art_of_saying_hello_without_saying_'hello'