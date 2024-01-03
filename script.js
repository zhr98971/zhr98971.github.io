// script.js

// Function to change the background color of the header
function changeHeaderColor() {
    const header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Add an event listener to the button
  const colorChangeButton = document.getElementById('colorChangeButton');
  colorChangeButton.addEventListener('click', changeHeaderColor);
  