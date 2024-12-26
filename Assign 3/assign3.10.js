// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str) {
    // Convert the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
const inputString = "Hello";
const reversedString = reverseString(inputString);
console.log(`Reversed string: ${reversedString}`);
