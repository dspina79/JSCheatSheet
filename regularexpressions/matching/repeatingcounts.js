// Repeating Counts
// indicating how often a term must appear in order for a match

// format /x{min,max}/ - indicates min an max repeats of 'x'
// format /x{min,}/ - indicates only a minumum number
// format /x{,max}/ - indicates a maximum number
// format /x{n}/ - indicates a specific number

const betweenThreeAndFiveORegex = /Wo{3,5}rd/;
const atLeastThreeORegex = /Wo{3,}rd/;
const exactlyFourRegex = /Wo{4}rd/;

const myWords = ["Word", "Woord", "Wooord", "Woooord", 
                    "Wooooord", "Woooooord"];

for (var i = 0; i < myWords.length; i++) {
    console.log(`\n${myWords[i]}`);
    console.log("/Wo{3,5}rd/ = " + betweenThreeAndFiveORegex.test(myWords[i]));
    console.log("/Wo{3,}rd/ = " + atLeastThreeORegex.test(myWords[i]));
    console.log("/Wo{4}rd/ = " + exactlyFourRegex.test(myWords[i]));
}

/*
Outputs
=======

Word
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Woord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = false
/Wo{4}rd/ = false

Wooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = true

Wooooord
/Wo{3,5}rd/ = true
/Wo{3,}rd/ = true
/Wo{4}rd/ = false

Woooooord
/Wo{3,5}rd/ = false
/Wo{3,}rd/ = true
/Wo{4}rd/ = false
*/