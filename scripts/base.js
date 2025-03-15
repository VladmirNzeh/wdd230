const hamButton = document.querySelector('#menu'); // Correct selector (ID, not class)
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// DARK MODE TOGGLE FUNCTIONALITY
const darkModeButton = document.getElementById('darkModeToggle');
const body = document.body;
const main = document.querySelector('main');

// Check if user prefers dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
}

// Toggle Dark Mode on Button Click
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
});
