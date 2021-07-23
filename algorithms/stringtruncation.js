// Truncate a String
// Strings longer than num will end with elipses (...)

function truncateString(str, num) {
    if (str.length > num) {
        let testStr = "";
        for (let i = 0; i < num; i++) {
        testStr += str[i];
        }
        return testStr + "...";
    }

    return str;
}
  
console.log(truncateString("The quick brown fox jumps over the lazy dog", 10));
// ^^^ outputs "The quick ..."