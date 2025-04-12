// forecast.js

const forecastContainer = document.querySelector('.forecast');
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.52&lon=3.37&units=metric&cnt=24&appid=02fac0ed65bc1ce69e0a6d57c5c9de33';

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw Error(await response.text());
    
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error('Forecast fetch error:', error);
  }
}

function displayForecast(forecastData) {
  // Filter the forecast data for entries at 12:00:00 (approx. next 3 days)
  const forecastList = forecastData.list.filter(entry => entry.dt_txt.includes("12:00:00"));

  forecastList.forEach(day => {
    const date = new Date(day.dt_txt);
    const temp = day.main.temp.toFixed(1);
    const iconCode = day.weather[0].icon;
    const description = day.weather[0].description;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('forecast-day');

    const dateElem = document.createElement('p');
    dateElem.textContent = date.toLocaleDateString(undefined, { weekday: 'short' });

    const iconElem = document.createElement('img');
    iconElem.setAttribute('src', iconURL);
    iconElem.setAttribute('alt', description);
    iconElem.setAttribute('loading', 'lazy');

    const tempElem = document.createElement('p');
    tempElem.textContent = `${temp}°C`;

    dayContainer.appendChild(dateElem);
    dayContainer.appendChild(iconElem);
    dayContainer.appendChild(tempElem);

    forecastContainer.appendChild(dayContainer);
  });
}

fetchForecast();
