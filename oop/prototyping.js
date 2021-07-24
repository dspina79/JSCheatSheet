// Adding Properties to the Function Class using Prototyping

function Shape(height, width) {
    this.height = height;
    this.width = width;
}

let square = new Shape(10, 10);

// add the new property
Shape.prototype.depth = 0;

let cube = new Shape(10, 10);
cube.depth = 10;

// check the properties of each
for (let prop in square) {
    if (square.hasOwnProperty(prop)) {
        console.log(`square HAS the ${prop} property.`);
    } else {
        console.log(`square DOES NOT HAVE the ${prop} property.`);
    }
}

for (let prop in cube) {
    if (cube.hasOwnProperty(prop)) {
        console.log(`cube HAS the ${prop} property.`);
    } else {
        console.log(`cube DOES NOT HAVE the ${prop} property.`);
    }
}

/*
Outputs
=======
square HAS the height property.
square HAS the width property.
square DOES NOT HAVE the depth property.
cube HAS the height property.
cube HAS the width property.
cube HAS the depth property.
*/
