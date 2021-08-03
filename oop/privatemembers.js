// Example of Private Members 
// Using let

var Person = function(firstAndLast) {
    let firstName = undefined;
    let lastName = undefined;
    // Only change code below this line
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = function(firstAndLast) {
      const spName = firstAndLast.split(" ");
      firstName = spName[0];
      lastName = spName[1];    
    };
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstName + " " + lastName;
    }
    this.setFullName(firstAndLast);
};