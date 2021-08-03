// Binary String Decoder
// returns the alpha-numeric representation of a string of
// binary numeric representations

function binaryStringDecover(str) {
    let strArray = str.split(" ");
    let outString = [];
    for (var i = 0; i < strArray.length; i++) {
        outString.push(String.fromCharCode(getNumberFromBinary(strArray[i])));
    }
    return outString.join("");
}

function getNumberFromBinary(binaryString) {
    return parseInt(binaryString, 2);
} 