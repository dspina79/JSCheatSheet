// Binary Search

// requires sorted array first
const binarySearch = (arr, searchElement) => {
    arr.sort((a, b) => a - b);
    while (arr.length > 0) {
        let position = arr.length / 2;
        if (position % 1 !== 0) {
            position = parseInt(position++);
        }
        if (arr[position] === searchElement) {
            return true;
        } else if (arr[position] > searchElement) {   
            arr = arr.slice(0, position);
        } else {
            arr = arr.slice(position + 1, arr.length);
        }
    }
    return false
};

let arr = [12873,94,8129,1,299,9234,910, 347, 239, 24, 294, 9];
const result = binarySearch(arr, 9);
console.log(result);