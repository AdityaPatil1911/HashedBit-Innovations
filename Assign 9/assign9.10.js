//Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.


// Function to calculate the sum of all numbers in the array
function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateSum(numbers);
  console.log("Sum of all numbers:", sum);
  