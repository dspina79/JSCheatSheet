// Split Array into Chunks of Size n
// [1, 2, 3, 4, 5, 6] chunck 3 = [[1, 2, 3], [4, 5, 6]]

function chunkArrayInGroups(arr, size) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += size) {
      tempArr.push(arr.slice(i, i + size));
    }
    arr = tempArr;
    console.log(tempArr);
    return arr;
  }  