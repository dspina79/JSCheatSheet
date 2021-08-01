// Curried Functions
// returns a reference to another function that can access
// all parameters in scope

function sum(x) {
    return function(y) {
        return x + y;
    }
}

// the format is func(firstParam)(secondParam)
console.log(sum(5)(10)); // outputs 15