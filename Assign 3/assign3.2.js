// //Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


let str = 'I love my India';

// Split the string into an array of words, reverse the array, and join it back into a string
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);
