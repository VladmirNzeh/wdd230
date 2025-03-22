// Page visits counter
const visitsElement = document.getElementById("visits");
let visits = localStorage.getItem("visits") || 0;
visits ++;
localStorage.setItem("visits", visits);
visitsElement.textContent = visits;

// Last modified date
const lastModifiedElement = document.getElementById("lastModified");

if (lastModifiedElement) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`;
}
