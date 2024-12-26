// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = 'INDIA';

// Step 1: Convert the string into an array
let charArray = string.split(''); // ['I', 'N', 'D', 'I', 'A']

// Step 2: Use splice to add 'O', 'N', 'E', 'S' in the appropriate position
charArray.splice(3, 0, 'O', 'N', 'E', 'S'); // Add at index 3 without removing anything

// Step 3: Join the array back into a string
let result = charArray.join('');

console.log(result); // Output: 'INDONESIA'
