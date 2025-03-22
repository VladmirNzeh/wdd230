// Page visits counter
const visitsElement = document.getElementById("visits");
let visits = localStorage.getItem("visits") || 0;
visits ++;
localStorage.setItem("visits", visits);
visitsElement.textContent = visits;

// Last modified date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;

// Calendar Elements
const calendarTitle = document.getElementById('calendarTitle');
const calendarDates = document.getElementById('calendarDates');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

// Get Current Date Info
let currentDate = new Date();

function renderCalendar(date) {
    calendarDates.innerHTML = ''; // Clear previous content

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    calendarTitle.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    // Empty boxes for days before the 1st day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarDates.appendChild(emptyCell);
    }

    // Generate actual calendar dates
    for (let day = 1; day <= totalDays; day++) {
        const dateElement = document.createElement('div');
        dateElement.textContent = day;

        // Highlight today's date
        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dateElement.classList.add('today');
        }

        calendarDates.appendChild(dateElement);
    }
}

// Navigation Controls
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial Calendar Render
renderCalendar(currentDate);
