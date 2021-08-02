// Converts a string to Pig Latin

function translatePigLatin(str) {
    const consonantStart = /^[bcdfghjklmnpqrstvwxyz]+/g;
    const vowelStart = /^[aeiou]/;
    let arr = str.split(/\W/);
    for (let i = 0; i < arr.length; i++) {
        if (vowelStart.test(arr[i])) {
        arr[i] += "way";
        } else {
            let consStart = arr[i].match(consonantStart)[0];
            arr[i] = arr[i].replace(consStart, "");
            arr[i] += consStart + "ay";
        }
    }
    return arr.join(" ");
}  