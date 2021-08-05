// Simple IO Testing Using Node

var fs = require('fs');
function outputFile(filePath) {
    fs.readFile(filePath, "utf8", function(error, data) {
        if (data) {
            console.log(data);
        } else if (error) {
            console.log(`Error: ${error}`)
        }
    });
}

function appendFile(filePath, newText) {
    fs.appendFile(filePath, newText, "utf8", function(error, data) {
        if (data) {
            console.log("Wrote data");
        } else if (error) {
            console.log(`Error: ${error}`)
        }
    });
}

outputFile("files/simpleread.txt");
appendFile("files/simpleread.txt", "a brave new world");
outputFile("files/simpleread.txt");
