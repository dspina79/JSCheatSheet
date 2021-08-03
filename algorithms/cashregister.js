// Cash Register Processor
// takes in a price, cash paid, and the amount in the 
// cash register (CID) to determine change.

const moneyMap = [
    ["ONE HUNDRED", 100.00],  
    ["TWENTY", 20.00],  
    ["TEN", 10.00],  
    ["FIVE", 5.00],  
    ["ONE", 1.00],  
    ["QUARTER", 0.25],
    ["DIME", 0.10],  
    ["NICKEL", 0.05000],  
    ["PENNY", 0.010000]    
];
  
function checkCashRegister(price, cash, cid) {
    var retVal = {};
    var change = cash - price;
    var totalCID = getTotalCID(cid);
    console.log(totalCID);
    console.log(`Price: ${price} Change: ${change}`);
    if (change < 0 || totalCID < change) {
      retVal = {
        status: "INSUFFICIENT_FUNDS", change: []
      };
    } else if (change === totalCID) {
      retVal = {
        status: "CLOSED",
        change: cid
        };
    } else {
        const changeMade = makeChange(change, cid);
        if (changeMade.length === 0) {
          retVal = {
            status: "INSUFFICIENT_FUNDS",
            change: []
          };
        } else {
          retVal = {
            status: "OPEN",
            change: changeMade
          };
        }
    }
    return retVal;
}

function getSpecificCID(cid, key) {
    for (var i = 0; i < cid.length; i++) {
      if (cid[i][0] === key) {
        return cid[i][1];
      }
    }
    return 0;
}

function makeChange(changeDue, cid) {
    var change = [];
    for (var i = 0; i < moneyMap.length; i++) {
      let mapType = moneyMap[i][0];
      let mapAmt = moneyMap[i][1];
      if (changeDue >= mapAmt) {
        let changeAmt = getSpecificCID(cid, mapType);
        if (changeDue >= changeAmt) {
          change.push([mapType, changeAmt])
          changeDue -= changeAmt;
        } else if (changeDue < changeAmt && changeAmt > 0) {
          let changeQuot = changeDue / mapAmt;
          if (mapType === "PENNY") {
            changeQuot = Math.round(changeQuot);
          }
          let changeUnits = parseInt(changeQuot);
          let changeUnitAmt = changeUnits * mapAmt;
          change.push([mapType, changeUnitAmt]);
          changeDue -= changeUnitAmt;
        }
      }
    }
    return changeDue > 0 ? [] : change;
}
  
function getTotalCID(cid) {
    let total = 0.00;
    for (var i = 0; i < cid.length; i++) {
        total += cid[i][1]; 
    }
    return total;
}
