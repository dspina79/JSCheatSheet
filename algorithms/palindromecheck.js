// Check if a String is a Palindrome
// returns true or false

function isPalindrome(str) {
    let strCopy = str.toLowerCase();
    let strArray = strCopy.split("");
    strArray = strArray.filter(s => /\w+/.test(s) && s !== " " && s !== "_");
    strCopy = strArray.join("");
    let strBackwardsArray = [];
    for (var i = 0; i < strArray.length; i++) {
      strBackwardsArray.unshift(strArray[i]);
    }
    let strBackwards = strBackwardsArray.join("");
    return strCopy === strBackwards;
}
  