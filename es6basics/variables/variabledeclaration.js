// new variable declartion option: let

// "let" variables are only available in the scope 
// of their declaration

{
var myVarName = "Dave";
let myLetName = "Dean";
} // using brackets to isolate scope

function printOutput() {
    try {
        if (myVarName !== undefined) {
            console.log("myVarName is present and is " + myVarName);
        }
    } catch(err) {
        console.log("Accessing myVarName caused an error: " + err); // should not fire
    }
    try {
        if (myLetName !== undefined) {
            console.log("myLetName is present and is " + myLetName);
        }
    } catch(err) {
        console.log("Accessing myLetVarName caused an error: " + err); // should fire    
    }
}

printOutput();