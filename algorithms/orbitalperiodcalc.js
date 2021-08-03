// Oribital Period Calculator
// in seconds

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let results = [];
    for (var i = 0; i < arr.length; i++) {
      var totalAlt = arr[i].avgAlt + earthRadius;
      var srv = Math.sqrt(((totalAlt * totalAlt * totalAlt) / GM));
      var per = parseInt(Math.round(2 * Math.PI * srv));
      var obj = {name: arr[i].name, orbitalPeriod: per};
      results.push(obj);
    }
    return results;
  }
  
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);