const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL with parameters
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=02fac0ed65bc1ce69e0a6d57c5c9de33';

// Function to fetch data from OpenWeatherMap API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

// Function to display the fetched weather data
function displayResults(data) {
    currentTemp.textContent = Math.round(data.main.temp);
    
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const description = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

// Call the API fetch function
apiFetch();
