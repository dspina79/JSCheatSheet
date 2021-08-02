// Find and Sum All Odd Fibbonacci Numbers

function sumFibs(num) {
    const fibs = getFibs(num);
    const oddFibs = fibs.filter(n => n % 2 === 1);
    const result = oddFibs.sum();
    
    return result;
}
  
function getFibs(maxNum) {
    let currentFib = 1;
    let fibArray = [1, 1];
    while(true) {
        currentFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        if (currentFib > maxNum) {
            break;
        }
        fibArray.push(currentFib);
    }
    return fibArray;
}

Array.prototype.sum = function() {
    let sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
