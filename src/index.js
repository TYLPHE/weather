import './style.css';
import generateBody from './generateBody';

const api = '32f3485fcef91da801aff2df635b45db';
const location = 'tokyo';
const metrics = 'metric';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api}&units=${metrics}`;

// fetch data
async function fetchApi(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    throw console.log(`Error: ${err}`);
  }
}

// after fetching, display data on webpage
function displayData(data) {
  const temp = document.querySelector('.now-temp');
  temp.textContent = data.main.temp;
}

// set page, fetch api, and show data
(async function init(url) {
  generateBody();
  const data = await fetchApi(url);
  displayData(data);
}(baseUrl));
