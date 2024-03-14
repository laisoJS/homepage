const searchbar = document.getElementById("searchbar");
const message = [
    "What are you searching for?",
    "Looking for something specific?",
    "Hello world!",
    "What's up?",
    "How can I assist you?",
    "Need help finding something?",
    "Searching for answers?",
    "Welcome to our search!",
    "Discover something new!"
];
let currentIndex = 0;
let underscoreVisibleInterval; // Variable to store the blinking interval

function updatePlaceholder() {
  // Clear blinking interval if running
  clearInterval(underscoreVisibleInterval);

  let nextIndex = (currentIndex + 1) % message.length;
  let nextMessage = message[nextIndex];
  animateText(nextMessage);
  currentIndex = nextIndex;
}

function animateText(text) {
  let index = 0;
  let interval = setInterval(function () {
    if (index <= text.length) {
      let placeholderText = text.substring(0, index);
      if (index < text.length) {
        placeholderText += '_'; // Add underscore after each letter until the end of the text
      }
      searchbar.placeholder = placeholderText;
      index++;
    } else {
      clearInterval(interval); // Clear interval once animation is complete
      startBlinkingCursor(text); // Call function to start blinking cursor after animation
    }
  }, 100); // Adjust the speed of text animation here
}

function startBlinkingCursor(text) {
  let underscoreVisible = true;
  underscoreVisibleInterval = setInterval(function () {
    if (underscoreVisible) {
      searchbar.placeholder = text + '_';
    } else {
      searchbar.placeholder = text;
    }
    underscoreVisible = !underscoreVisible; // Toggle visibility for blinking
  }, 500); // Adjust blinking speed here
}

updatePlaceholder();
setInterval(updatePlaceholder, 10000);
