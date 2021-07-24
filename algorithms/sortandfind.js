// Find the Position to Insert in a Sorted Array
// given an array:  1) sort it
//                    2) return the index to insert the number provided in the sort    

function getIndexToIns(arr, num) {
    let index = 0;
    // sort it
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        index = i;
        break;
      } else if (arr[i] < num && ((i + 1) === arr.length || arr[i + 1] >= num )) {
        index = i + 1;
        break;
      }
    }
    return index;
  }