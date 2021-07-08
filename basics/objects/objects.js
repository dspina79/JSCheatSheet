// basic object notations - dot (.) and bracket

var myCat = {
    name: 'Charlotte',
    type: 'tabby',
    age: 8,
    legs: 4,
    tail: 1,
    purrs: true
};

console.log(myCat.name);
console.log(myCat.purs);
console.log(myCat["name"]);
console.log(myCat["purs"]);

// adding properties
myCat.color = "black";
console.log(myCat + " is " + myCat.color);

// removing properties
console.log('Before the removal:');
console.log(myCat);
delete myCat.color;
console.log('After the removal:');
console.log(myCat);

// check if an object has a property using hasOwnProperty
var hasTails = myCat.hasOwnProperty('tail');
console.log('Does the cat have a tail property? ' + hasTails);

var possibleProperties = ["name", "age", "color", "hair", "tail", "legs", "purrs"];
console.log("\nProperty Checker");
for (var prop of possibleProperties) {
    console.log(prop + "? " + myCat.hasOwnProperty(prop));
}