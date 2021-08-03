// Validate a Telephone Number
function telephoneCheck(str) {
    const regcheck = /^(?:1|1\s)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    console.log(regcheck.test(str));
    return regcheck.test(str);  
  
}
  