//Write a function that takes an array as an argument, adds a new element to the end of the array using push(), 
//and then removes the last element using pop(). Return the modified array.



const readline = require("readline");

function modifyArrayFromInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter array elements separated by commas: ", (input) => {
    const arr = input.split(",").map((item) => item.trim());

    rl.question("Enter the new element to add: ", (newElement) => {
      // Add the new element to the end of the array
      arr.push(newElement);
      console.log("Array after adding the new element:", arr);

      rl.question("Do you want to remove the last element? (yes/no): ", (choice) => {
        if (choice.toLowerCase() === "yes") {
          arr.pop();
          console.log("Array after removing the last element:", arr);
        } else {
          console.log("No changes made. Final array:", arr);
        }
        rl.close();
      });
    });
  });
}

// Call the function
modifyArrayFromInput();
