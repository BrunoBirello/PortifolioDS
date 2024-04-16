const textElement = document.getElementById('text');
const prefix = 'Data';
const words = ['Science', 'Analytics', 'Engineer'];

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      textElement.textContent = prefix + ' ' + words[wordIndex].substring(0, charIndex+1);
      charIndex++;
      setTimeout(type, 200); // Adjust the speed here
    } else {
      setTimeout(erase, 1000); // Adjust the delay before erasing here
    }
  }
}

function erase() {
  if (charIndex >= 0) {
    textElement.textContent = prefix + ' ' + words[wordIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 100); // Adjust the speed of erasing here
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(type, 500); // Adjust the delay before typing next word here
  }
}

type(); // Start the animation
