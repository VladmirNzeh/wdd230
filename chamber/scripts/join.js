// Set the hidden timestamp field to the current date and time in ISO format.
document.getElementById('timestamp').value = new Date().toISOString();

// Update membership benefits display when a membership button is clicked.
const membershipButtons = document.querySelectorAll('.membership-btn');
const benefitDescription = document.getElementById('benefitDescription');
membershipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    benefitDescription.textContent = btn.getAttribute('data-benefits');
    // Optionally, update the membership select field:
    document.getElementById('membership').value = btn.getAttribute('data-membership');
  });
});
