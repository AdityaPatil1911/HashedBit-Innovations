//Create an object called person with properties for name, age, and occupation. 
//Write a function that logs a greeting message using these properties.

// Create the person object
const person = {
    name: "Aditya Patil",
    age: 22,
    occupation: "Software Developer",
  };
  
  // Function to log a greeting message
  function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and I work as a ${person.occupation}.`);
  }
  
  // Example usage
  greetPerson(person);
  