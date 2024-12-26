//Write a function that filters out all even numbers from an array of numbers using the filter() method. 
//Return the new array of odd numbers


// Function to filter out even numbers
function filterOddNumbers(numbers) {
    return numbers.filter((number) => number % 2 !== 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddNumbers = filterOddNumbers(numbers);
  
  console.log("Original array:", numbers);
  console.log("Odd numbers array:", oddNumbers);
  