// Mixins to Add Properties

// Mixins are interesting functions that are used to add
// the same functionality to disparate objects.

function Coin(denomonation){
    this.denomonation = denomonation;
}

function Star(name, lightYearsAway) {
    this.name = name;
    this.lightYearsAway = lightYearsAway;
}

Star.prototype = {
    constructor: Star,
    fuse: function() {
        console.log(`${this.name} is making new atoms using nuclear fusion.`);
    }
}

// Create the Mixin to give the ability to shine for both
// Stars and Coins

function shineMixin(obj) {
    obj.shine = function() {
        console.log("Shining Bright!!");
    }
}

let penny = new Coin(0.01);
let proxima = new Star("Proxima Centauri", 4);

shineMixin(penny);
shineMixin(proxima);

console.log("Penny\n=====");
penny.shine();
console.log("\nProxima\n=======");
proxima.shine();
proxima.fuse();

/*
Outputs
=======
Penny
=====
Shining Bright!!

Proxima
=======
Shining Bright!!
Proxima Centauri is making new atoms using nuclear fusion.
*/