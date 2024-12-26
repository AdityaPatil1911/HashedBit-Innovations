//JS DOM Assignment - Dynamic - CSS


// javascript code goes here
// Change text color based on input
document.getElementById('colorchange').addEventListener('click', () => {
    const color = document.getElementById('colorbox').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.color = color;
});

// Change font size based on slider value
document.getElementById('fontsize').addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontSize = fontSize;
});

// Toggle Italics
document.getElementById('italic').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle =
        textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Toggle Underline
document.getElementById('underline').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration =
        textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Toggle Bold
document.getElementById('bold').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight =
        textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Change font family based on dropdown selection
document.getElementById('list').addEventListener('change', (event) => {
    const fontFamily = event.target.value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontFamily = fontFamily;
});

// Get and display current CSS properties
document.getElementById('getstyle').addEventListener('click', () => {
    const textContainer = document.getElementById('text-container');
    const computedStyles = window.getComputedStyle(textContainer);
    
    const cssProps = `
        color: ${computedStyles.color};
        font-size: ${computedStyles.fontSize};
        font-family: ${computedStyles.fontFamily};
        text-decoration: ${computedStyles.textDecoration};
        font-style: ${computedStyles.fontStyle};
        font-weight: ${computedStyles.fontWeight};
    `.trim().replace(/\s+/g, ' ');

    document.getElementById('css-props').innerText = cssProps;
});
