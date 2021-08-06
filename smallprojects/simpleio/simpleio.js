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

function writeNewFile(filePath, starterText) {
    fs.writeFile(filePath, starterText, "utf8", function(error, data) {
        if (data) {
            console.log(`Successfully wrote file: ${data}.`);
        } else if (error) {
            console.log(`An error occurred when starting the file: ${error}.`);
        }
    });
}

function appendFile(filePath, newText) {
    fs.appendFile(filePath, `\n${newText}`, "utf8", function(error, data) {
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

writeNewFile("files/studyexcerpt.txt", "Do you remember what Darwin says about music? He claims that the power of producing and appreciating it existed among the human race long before the power of speech was arrived at.");
appendFile("files/studyexcerpt.txt", "Perhaps that is why we are so subtly influenced by it."); 
appendFile("files/studyexcerpt.txt", "There are vague memories in our souls of those misty centuries when the world was in its childhood.")

outputFile("files/studyexcerpt.txt");