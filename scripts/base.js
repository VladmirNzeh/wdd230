const hamButton = document.querySelector('#menu'); // Correct selector
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

const darkModeToggle = document.querySelector('#dark-mode-toggle'); // Correct selector
const body = document.body;
const main = document.querySelector('main');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (main) main.classList.toggle('dark-mode');
    });
}
