//Q1) Create an array of states in india.
//Remove all the names starting with vowels from the list. Use array.filter.





// Array of states in India
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Use filter to remove states starting with vowels (A, E, I, O, U)
const filteredStates = states.filter(state => {
    const firstLetter = state[0].toLowerCase(); // Get the first letter in lowercase
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter); // Exclude vowels
});

// Print the filtered list of states
console.log("States not starting with vowels:");
console.log(filteredStates);
