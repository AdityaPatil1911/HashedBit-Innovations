// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.


const students = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
  ];
  
  // Calculate the average for each student
  const output = students.map(student => {
    const studentName = Object.keys(student)[0]; // Extract the student's name (e.g., 'student1')
    const scores = Object.values(student[studentName]); // Get the scores array
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length; // Calculate average
    return {
      [studentName]: {
        average: average.toFixed(0), // Round to 0 decimal places if needed
      },
    };
  });
  
  console.log(output);
  