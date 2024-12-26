//Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).


// Function to calculate the area of a rectangle
function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
  
  // Example usage
  const rectangle = {
    width: 10,
    height: 5,
  };
  
  const area = calculateArea(rectangle);
  console.log(`The area of the rectangle is: ${area}`);
  