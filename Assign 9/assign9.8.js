//Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().



// Function to get the keys of an object
function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  // Example usage
  const person = {
    name: "Aditya Patil",
    age: 22,
    occupation: "Software Developer",
  };
  
  const keys = getObjectKeys(person);
  console.log("Object keys:", keys);
  