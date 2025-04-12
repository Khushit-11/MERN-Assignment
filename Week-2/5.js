const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (num) => {
    let square = num * num;
    console.log("Square is", square);
    readline.close();
});
