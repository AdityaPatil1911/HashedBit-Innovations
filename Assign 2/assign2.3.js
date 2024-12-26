//3. You need to write a function findTax() that takes a number type variable as an argument 
//which is the salary of a person. You need to calculate the tax amount on his salary by using 
//the Js switch control flow. The tax rates are given below.
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.


const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax(salary) {
    let taxRate;

    // Use switch to determine the tax rate based on salary
    switch (true) {
        case (salary > 1500000):
            taxRate = 0.30; // 30% tax for salary above 1.5 million
            break;
        case (salary > 1000000):
            taxRate = 0.20; // 20% tax for salary between 1 million and 1.5 million
            break;
        case (salary > 500000):
            taxRate = 0.10; // 10% tax for salary between 500,000 and 1 million
            break;
        case (salary > 0):
            taxRate = 0.00; // 0% tax for salary between 0 and 500,000
            break;
        default:
            taxRate = -1; // Invalid salary
            break;
    }

    // If tax rate is valid (not -1), calculate the tax amount
    if (taxRate !== -1) {
        const taxAmount = salary * taxRate;
        console.log(`The tax amount on a salary of ${salary} is: ${taxAmount}`);
    } else {
        console.log("Invalid salary.");
    }
}

// Prompt the user to enter their salary
rl.question("Enter your salary: ", (input) => {
    const salary = parseFloat(input); // Convert the input to a float
    if (isNaN(salary) || salary <= 0) {
        console.log("Please enter a valid salary.");
    } else {
        findTax(salary); // Calculate and display the tax
    }
    rl.close(); // Close the readline interface
});
