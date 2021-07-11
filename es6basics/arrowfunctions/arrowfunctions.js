// use arrow (=>) functions for shorthand

// basic function without parameters
function sayHello() {
    console.log('Hello World!');
}

// basic function with parameters
function add(x, y) {
    return x + y;
}

// rewritten as an arrow functions
const sayHello2 = () => console.log('Hello World Again!');
const add2 = (x, y) => x + y; // returns x + y without the return keyword

// calling arrow functions is the same as regular functions
sayHello();
sayHello2();

console.log(add(5,3));
console.log(add2(5,10));

// more complex operations
const getAbsoluteValue = (x) => {
    if (x < 0) {
        return x * -1;
    }
    return x;
}

console.log(getAbsoluteValue(5));
console.log(getAbsoluteValue(-5));
console.log(getAbsoluteValue(0));