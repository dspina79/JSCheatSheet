// Find the Missing Letter in a Range
// example: findMissingLetter("abcdf") returns "e"

function findMissingLetter(str) {
    str = str.toLowerCase();
    let foundLetter = undefined;
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterArray = letters.split("");
    const startingLetter = str[0];
    let startingIndex = 0;
    for (var i = 0; i < letterArray.length; i++) {
      if (letterArray[i] === startingLetter) {
        startingIndex = i;
        break;
      }
    }
    let index = 0;
    for (var i = startingIndex; i < letterArray.length; i++) {
      let goodLetter = letterArray[i];
      if (str[index] !== letterArray[i]) {
        foundLetter = letterArray[i];
        break;
      }
      index++;
    }
    
    return foundLetter;
}