// Selectors
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const main = document.querySelector('main');
const lastModifiedSpan = document.getElementById('lastModified');

// 1. HAMBURGER MENU TOGGLE
menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// 2. DARK MODE TOGGLE
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  main.classList.toggle('dark-mode');
});

// 3. LAST MODIFIED DATE
// This ensures the "Last Modification" date is set dynamically.
lastModifiedSpan.textContent = document.lastModified;

// 4. PLACEHOLDER FOR WEATHER OR VISIT COUNTER
// Example: Add a page visit counter in localStorage
/*
const visitsDisplay = document.getElementById('visits');
let numVisits = Number(localStorage.getItem('visitCount')) || 0;
numVisits++;
localStorage.setItem('visitCount', numVisits);
visitsDisplay.textContent = numVisits;
*/
