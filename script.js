// Get the color picker inputs
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const checking = document.querySelector('.checking');

// Add event listener to color picker inputs
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// Function to set the background gradient and update the checking paragraph
function setGradient() {
  const gradient = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  document.body.style.background = gradient;
  checking.textContent = gradient + ';';
}
