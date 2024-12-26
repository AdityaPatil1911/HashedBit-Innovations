//4. Write a function to perform this. You are given two numbers n1 and n2. 
//You need to find the sum of the products of their corresponding digits. 
//So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.



const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfProductOfDigits(n1, n2) {
    // Convert both numbers to strings to access each digit
    let str1 = n1.toString();
    let str2 = n2.toString();

    let sum = 0;

    // Loop through the digits and calculate the product of corresponding digits
    const maxLength = Math.max(str1.length, str2.length);

    // Pad the shorter string with leading zeros to match lengths
    while (str1.length < maxLength) {
        str1 = '0' + str1;
    }
    while (str2.length < maxLength) {
        str2 = '0' + str2;
    }

    // Loop through each digit and calculate the product
    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(str1[i]);
        const digit2 = parseInt(str2[i]);
        sum += digit1 * digit2;
    }

    return sum;
}

// Prompt the user to enter two numbers
rl.question("Enter the first number (n1): ", (n1) => {
    rl.question("Enter the second number (n2): ", (n2) => {
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please enter valid numbers.");
        } else {
            const result = sumOfProductOfDigits(num1, num2);
            console.log("The sum of the products of the corresponding digits is:", result);
        }

        rl.close(); // Close the readline interface
    });
});
