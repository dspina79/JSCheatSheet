// find the longest word in a string
function findLongestWord(str) {
    const strs = str.match(/\w+/g);
    let longestWord = '';
    for (let str of strs) {
        if (str.length > longestWord.length) {
            longestWord = str;
        }
    }
    return longestWord;
}

// test it
const sentenceToTest = "The once was a man who knew too little but ate a number of things.";
const longestWord = findLongestWord(sentenceToTest);
console.log(longestWord);