const currentTemp = document.querySelector('.information p:nth-of-type(2)');
const weatherIcon = document.createElement('img');
const captionDesc = document.createElement('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.52&lon=3.37&units=metric&appid=02fac0ed65bc1ce69e0a6d57c5c9de33';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());

    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error('Weather fetch error:', error);
  }
}

function displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(1);
  const description = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  currentTemp.innerHTML = `🌡️ ${temp}°C - ${description}`;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', description);
  weatherIcon.setAttribute('loading', 'lazy');

  captionDesc.textContent = description;

  // Add the icon and caption to the weather section
  const infoCard = document.querySelector('.information');
  infoCard.appendChild(weatherIcon);
  infoCard.appendChild(captionDesc);
}

apiFetch();
