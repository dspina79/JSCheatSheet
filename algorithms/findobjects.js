// Find Objects 
// find objects in an array using matching key value pairs
function findObject(collection, objectPattern) {
    var arr = [];
    arr = collection.filter(item => {
      for (var k = 0; k < Object.keys(objectPattern).length; k++) {
        let key = Object.keys(objectPattern)[k];
        if (!item[key] 
            || objectPattern[key] !== item[key]) {
          return false;
        }
      }
      return true;
    });
    return arr;
  }
  