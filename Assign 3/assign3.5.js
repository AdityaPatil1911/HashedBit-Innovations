//Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function correctfn(string, wrong, correct) {
    // Use string.replace() to replace the first occurrence of the wrong word
    const updatedString = string.replace(wrong, correct);
    return updatedString;
}

// Example usage
const sentence = "I love progamming.";
const wrongWord = "progamming";
const correctWord = "programming";

const result = correctfn(sentence, wrongWord, correctWord);
console.log("Corrected Sentence:", result);
