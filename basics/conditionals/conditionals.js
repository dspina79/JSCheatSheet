// basic condition checking
var myBoolean = true;
if (myBoolean) {
    console.log('My boolean variable is true.');
} else {
    console.log('My boolean variable is false.');
}

// comparisons
var myAge = 40;

// basic equivalence
if (myAge == 40) {
    console.log('My age does equal 40');    
}

if (myAge == '40') {
    console.log('My age does equal \'40\'');    
}

// inequality check
if (myAge == 20) {
    console.log('My age does not equal 20');    
}

if (myAge == '20') {
    console.log('My age does equal \'20\'');    
}

// strict equivalence
if (myAge === 40) {
    console.log('My age does equal 40');    
}

if (myAge === '40') {
    console.log('My age does equal \'40\'');    
} else {
    console.log('My age is not equal to \'40\''); //displays
}

/*
    Logical Operators
*/

// logical AND (&&)

if (1 < 2 && 1 > 0) {
    console.log("This is true"); // outputs
}

if (1 < 2 && 1 > 3) {
    console.log("This is also true?"); // will not print
}

// logical OR (||)
if (1 < 2 || 1 > 4) {
    console.log("This is true"); // outputs
}

if (1 < 0 || 1 > 3) {
    console.log("This is also true?"); // will not print
}


/*
    CONDITIONS
*/

// basic if statement

var myTestNum = 10;

if (myTestNum >= 10) {
    console.log('Test num is >= 10');
}

// if/else
if (myTestNum >= 15) {
    console.log('Test num is >= 15');
} else {
    console.log('Test num is less than 15');
}

// if - else if - else
if (myTestNum >= 20) {
    console.log('Test num is >= 20');
} else if (myTestNum > 15) {
    console.log('Test num is > 15');
} else if (myTestNum >= 10) {
    console.log('Test num is >= 10');
} else {
    console.log('Test num is less than 10');
}

// switch statement 
var mySwitchVar = 3;
switch(mySwitchVar) {
    case 1:
        console.log('Alpha');
        break;
    case 2:
        console.log('Beta');
        break;
    case 3:
        console.log('Gamma');
        break;
    case 4:
        console.log('Delta');
        break;
    default:
        console.log('Unknown');
        break;
}