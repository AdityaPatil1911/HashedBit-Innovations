//Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.



// Array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Function to return the second fruit
function getSecondFruit(fruitsArray) {
  return fruitsArray[1]; // Arrays are zero-indexed, so the second element is at index 1
}

// Call the function and log the result
console.log(getSecondFruit(fruits)); // Output: Banana
