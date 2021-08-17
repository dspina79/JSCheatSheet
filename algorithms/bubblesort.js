// Bubble Sort

const bubble = (arr) => {
    let sorted = true;

    do {
        sorted = true;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    } while (!sorted)

    return arr;
}

var arrTest = [23,234,452,1234,3452,7,87,2,124,23,58,68421,34];
var result = bubble(arrTest);
console.log(result);