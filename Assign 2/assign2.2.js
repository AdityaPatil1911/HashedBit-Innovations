//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.



const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    // Ask for the operation and numbers
    rl.question("Enter operation (+, -, *, /): ", (operation) => {
        rl.question("Enter first number: ", (num1) => {
            rl.question("Enter second number: ", (num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                
                let result;

                // Using switch to perform the selected operation
                switch (operation) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        if (num2 !== 0) {
                            result = num1 / num2;
                        } else {
                            result = "Error! Division by zero.";
                        }
                        break;
                    default:
                        result = "Invalid operation!";
                }

                console.log("Result: " + result);
                rl.close(); // Close the readline interface
            });
        });
    });
}

// Call the function
calculator();
