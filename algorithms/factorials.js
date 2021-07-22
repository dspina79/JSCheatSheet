const factorial = (num) => {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
};

// test it out
for (let i = 1; i < 7; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}