//Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// Function to square each number in the array
function squareNumbers(numbers) {
    return numbers.map((number) => number * number);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareNumbers(numbers);
  
  console.log("Original array:", numbers);
  console.log("Squared array:", squaredNumbers);
  