// DNA Compliments
// returns an array of arrays of DNA complimentary pairs
// assuming an input sequence (e.g. "ATC")

function pairElement(str) {
    let dnaPairs = [];
    const dnaMap = {
        G: "C", T: "A", C: "G", A: "T"
    };
    for (var s of str) {
        let match = [s, dnaMap[s]];
        dnaPairs.push(match);
    }

    return dnaPairs;
}