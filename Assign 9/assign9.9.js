//Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.



// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Example usage
  const object1 = {
    name: "Aditya Patil",
    age: 22,
  };
  
  const object2 = {
    occupation: "Software Developer",
    location: "Thane",
  };
  
  const mergedObject = mergeObjects(object1, object2);
  console.log("Merged Object:", mergedObject);
  