// ========== SELECTORS ==========
const selectors = {
  menuButton: document.getElementById('menu'),
  navigation: document.querySelector('.navigation'),
  darkModeToggle: document.getElementById('darkModeToggle'),
  body: document.body,
  main: document.querySelector('main'),
  lastModifiedSpan: document.getElementById('lastModified'),
  visitMessage: document.getElementById('visitMessage'),
  galleryImages: document.querySelectorAll('.gallery img')
};

// ========== HAMBURGER MENU TOGGLE ==========
selectors.menuButton.addEventListener('click', () => {
  selectors.navigation.classList.toggle('open');
  selectors.menuButton.classList.toggle('open');
});

// ========== DARK MODE TOGGLE ==========
selectors.darkModeToggle.addEventListener('click', () => {
  selectors.body.classList.toggle('dark-mode');
  selectors.main.classList.toggle('dark-mode');
});

// ========== LAST MODIFIED DATE ==========
selectors.lastModifiedSpan.textContent = document.lastModified;

// ========== LAZY LOADING IMAGES ==========
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src; 
          imageObserver.unobserve(img);
      }
  });
}, { threshold: 0.1 });

lazyImages.forEach(img => imageObserver.observe(img));

// ========== VISIT COUNTER & DATE LOGIC ==========
const lastVisit = Number(localStorage.getItem('lastVisitDate')) || 0;
const currentVisit = Date.now();

const getDaysDifference = (previousDate, currentDate) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.floor((currentDate - previousDate) / oneDay);
};

if (!lastVisit) {
  selectors.visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDifference = getDaysDifference(lastVisit, currentVisit);
  selectors.visitMessage.textContent = 
      daysDifference < 1 
      ? "Back so soon! Awesome!" 
      : `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
}

localStorage.setItem('lastVisitDate', currentVisit);

// ========== IMAGE HOVER EFFECT (CSS-BASED SOLUTION) ==========
