//JS DOM Assignment - Div Creation


// Write your code here
function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Set the width and height with the 'px' unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    // Set the text content of the new div
    newDiv.textContent = text;
    
    // Get the container and append the new div to it
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}

// Do not change this code
window.createDiv = createDiv;
