// Page visits counter
const visitsElement = document.getElementById("visits");
let visits = localStorage.getItem("visits") || 0;
visits ++;
localStorage.setItem("visits", visits);
visitsElement.textContent = visits;

// Last modified date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;