// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to calculate the repeated sum of digits
function repeatedDigitSum(num) {
    while (num >= 10) { // Repeat until the number becomes a single digit
        num = num
            .toString() // Convert the number to a string
            .split('')  // Split into individual digits
            .map(Number) // Convert each digit back to a number
            .reduce((sum, digit) => sum + digit, 0); // Sum the digits
    }
    return num;
}

// Take user input
rl.question("Enter a number: ", (input) => {
    const number = parseInt(input); // Convert input to an integer
    if (!isNaN(number)) {
        const result = repeatedDigitSum(number);
        console.log(`The repeated sum of digits of ${number} is: ${result}`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
    rl.close();
});
