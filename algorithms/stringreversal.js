const reverseString = (str) => {
    let retStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        retStr += str[i];
    }

    return retStr;
};

// test it
const strs = ["bob", "believe", "washington", "peaches"];

for (let str of strs) {
    console.log(`${str} reversed is ${reverseString(str)}`);
}