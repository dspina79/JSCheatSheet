// Title Case a Phrase
function titleCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (i === 0 || str[i - 1] === " ") {
        letter = letter.toUpperCase();
        } else  {
        letter = letter.toLowerCase();
        }
        result += letter;
    }
    return result;
}
  
titleCase("I'm a little tea pot");