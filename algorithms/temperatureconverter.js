const toFarenheit = (celsius) => celsius * (9/5) + 32;
const toCelsius = (farenheit) => (farenheit - 32) * (5/9);

// convert 32 degrees f
console.log(`32 degrees F = ${toCelsius(32)}C`);
// convert 100 degrees c
console.log(`100 degrees C = ${toFarenheit(100)}F`);