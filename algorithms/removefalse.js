// Remove Elements from an Array that are False

function bouncer(arr) {
    const falseValues = [false, null, 0, "", undefined];
    for (let i = 0; i < falseValues.length; i++) {
      let index = arr.indexOf(falseValues[i]);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    
    // handling NaN separately
    var checkNaN = false;
    do {
      let index = -1;
      checkNaN = false;
      for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]) === 'NaN') {
          checkNaN = true;
          index = i;
        }
      }
      if (checkNaN) {
        console.log('Found' + index);
        arr.splice(index, 1);
      }
    } while(checkNaN)
    
    return arr;
  }
  