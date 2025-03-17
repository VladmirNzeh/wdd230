const hamButton = document.querySelector('#menu'); // Correct selector (ID, not class)
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
// 2. DARK MODE TOGGLE
const modeButton = document.querySelector('')
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
  });
  
  // 3. LAST MODIFIED DATE
  // This ensures the "Last Modification" date is set dynamically.
  lastModifiedSpan.textContent = document.lastModified;
  