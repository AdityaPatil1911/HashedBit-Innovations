//JS DOM Assignment - Hide Show Para

// your js code goes here
function toggleVisibility() {
    // Get the paragraph element
    const paragraph = document.getElementById('useless-paragraph');
    
    // Toggle the display property between 'none' and 'block'
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; // Show the paragraph
    } else {
        paragraph.style.display = 'none'; // Hide the paragraph
    }
}
