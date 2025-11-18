const texts = [
  "Full-Stack Developer",
  "AI Web Developer",
  // "React & Node.js Developer",
  "PHP Laravel Expert",
  "REST API Specialist",
  "Custom Web App Developer",
  "Portfolio Creator"
];

const typingSpeed = 100;
const erasingSpeed = 100;
const delayBetween = 1000;

let textIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (charIndex < texts[textIndex].length) {
    typewriter.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

// Start typing
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetween);
});



var tablinks = document.getElementsByClassName('tab-link');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}
