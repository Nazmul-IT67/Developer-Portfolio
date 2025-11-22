// Menu 
function openmenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});

// Header 
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

// Animation 
AOS.init({
  duration: 800,
  easing: 'ease',
  once: true,
});


// Smooth Scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      history.pushState(null, null, this.getAttribute('href'));
    }
  });
});

// Back to Top Button Script
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.remove('opacity-0', 'invisible');
    backToTop.classList.add('opacity-100', 'visible');
  } else {
    backToTop.classList.remove('opacity-100', 'visible');
    backToTop.classList.add('opacity-0', 'invisible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});