//JS DOM Assignment - Dark Theme

function swapTheme() {
    // Get the div and button elements
    const appDiv = document.getElementById('app');
    const button = document.getElementById('swap');
    
    // Toggle classes for the div and button
    if (appDiv.classList.contains('day')) {
        appDiv.classList.replace('day', 'night');
        button.classList.replace('button_day', 'button_night');
    } else {
        appDiv.classList.replace('night', 'day');
        button.classList.replace('button_night', 'button_day');
    }
}
