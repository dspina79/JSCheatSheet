// Number Array Hash

function buildStarterTriangle(initialArray) {
    let arr = [];
    arr.unshift(initialArray);
    while(initialArray.length > 1) {
        initialArray = getSumBlock(initialArray);
        arr.unshift(initialArray);
    }
    return arr;
}

function getSumOfTriangle(arr) {
    let sums = [];
    let sumsRight = [];
    // left side
    for (var i = 0; i < arr.length; i++) {
        let sum = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].length > i) {
                sum += arr[j][i];
            }
        }
        sums.push(sum);
    }

    // right side
    for (var j = 0; j < arr.length; j++) {
        let sum = 0;
        for (var i = arr.length - 1; i >= 0; i--){
            if (arr[i].length > j) {
                sum += arr[i][arr[i].length - j - 1];
            }
        }
        sumsRight.unshift(sum);
    }
    sums.push(...sumsRight);
    return sums;
}

function getHashSet(arr, sizeToMeet) {
    const vector = [783, 111, 813, 67];
    arr.push(...vector);
    if (sizeToMeet === undefined) {
        sizeToMeet = arr.length;
    }
    let triangle = buildStarterTriangle(arr);
    let result = getSumOfTriangle(triangle);
    
    while (result.length != sizeToMeet) {
        result = getSumBlock(result);
    }
    return result;
}

function getSumBlock(arr) {
    let block = [];
    for (var i = 0; i < arr.length - 1; i++) {
        block.push(Math.abs(arr[i] - arr[i + 1]));
    }
    return block;
}

var testArr = [[0], [0, 1], [0, 1, 2]];
console.log(getSumOfTriangle(testArr));
var testArr2 = [[1], [4, 3], [3, 7, 4]];
console.log(getSumOfTriangle(testArr2));

var testInput1 = [3, 7, 4];
const result1 = buildStarterTriangle(testInput1);
console.log(result1);
const hashResult = getHashSet(testInput1, 3);
console.log(hashResult);
const hashResult1 = getHashSet(testInput1, 2);
console.log(hashResult1);
const hashResult2 = getHashSet(testInput1, 1);
console.log(hashResult2);