// Number Array Hash

function buildStarterBlock(initialArray) {
    let arr = [];
    arr.unshift(intitialArray);
    while(initialArray.length > 1) {
        initialArray = getSumBlock(initialArray);
        arr.unshift(initialArray);
    }
}

function getSumTriangle(arr) {
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
    while (arr.length < sizeToMeet) {
        arr = getSumBlock(arr);
    }

    return arr;
}

function getSumBlock(arr) {
    let block = [];
    for (var i = 0; i < arr.length - 1; i++) {
        block.push(arr[i] + arr[i + 1]);
    }
    return block;
}

var testArr = [[0], [0, 1], [0, 1, 2]];
console.log(getSumTriangle(testArr));
var testArr2 = [[1], [4, 3], [3, 7, 4]];
console.log(getSumTriangle(testArr2));