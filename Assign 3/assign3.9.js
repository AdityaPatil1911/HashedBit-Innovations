//Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    // Trim leading/trailing spaces and split the paragraph into words using spaces as a delimiter
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

// Example usage:
const paragraph = "Web development, a broad term for the work involved in developing a web site for the internet or an intranet. It can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration and e-commerce development.";
const wordCount = countWords(paragraph);
console.log(`The number of words in the paragraph is: ${wordCount}`);
