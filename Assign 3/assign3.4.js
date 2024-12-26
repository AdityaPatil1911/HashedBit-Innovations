//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.



// Take a string with at least 20 characters
let str = "Hello my name is Aditya Patil";

// Convert the string to lowercase to simplify comparison
str = str.toLowerCase();

// Define vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Initialize counters
let vowelCount = 0;
let consonantCount = 0;

// Loop through the string and check each character
for (let char of str) {
    if (/[a-z]/.test(char)) { // Check if the character is an alphabet
        if (vowels.includes(char)) {
            vowelCount++; // Increment vowel count if it's a vowel
        } else {
            consonantCount++; // Otherwise, increment consonant count
        }
    }
}

// Print the results
console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
