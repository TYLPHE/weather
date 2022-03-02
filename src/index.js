import './style.css';
import generateBody from './generateBody';

// I havent learned how to hide APIs yet.
const api = '32f3485fcef91da801aff2df635b45db';

// TODO: add a search for location
let location = '';

// can be 'metric' or 'imperial'
const metrics = 'imperial';

// default latitude and longitude values
let lat = 37.7790262;
let lon = -122.419906;

// lon/lat coordinates -> location name
let coordToGeo = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${api}`;

// location/zip/post code -> lon/lat coordinates
let GeoToCoord = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api}`;

// used in fetch()
let baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly&lat=${lat}&lon=${lon}&APPID=${api}&units=${metrics}`;

// fetch data
async function fetchApi(url) {
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    throw alert(`Error: ${err}`);
  }
}

// convert coords to name
async function reverseGeo(data) {
  lat = data.lat;
  lon = data.lon;
  coordToGeo = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${api}`;
  const name = await fetchApi(coordToGeo);
  return name[0].name;
}

// after fetching, display data on webpage
async function displayData(data) {
  const nowTemp = document.querySelector('.now-temp');
  nowTemp.textContent = Math.round(`${data.current.temp}`);
  nowTemp.textContent += '°';

  const nowHigh = document.querySelector('.now-high');
  nowHigh.textContent = Math.round(`${data.daily[0].temp.max}`);

  const nowLow = document.querySelector('.now-low');
  nowLow.textContent = Math.round(`${data.daily[0].temp.min}`);
  nowLow.textContent += '°';

  const apiCondition = document.querySelector('.condition');
  const desc = data.current.weather[0].description;
  const lowercase = desc.substring(1);
  const uppercase = desc.toUpperCase().slice(0, 1);
  apiCondition.textContent = uppercase + lowercase;

  const apiLocation = document.querySelector('.location-div');
  apiLocation.textContent = await reverseGeo(data);

  for (let i = 1; i <= 5; i += 1) {
    const forecastDay = document.querySelector(`.day-${i}`);
    forecastDay.textContent = new Date(data.daily[i].dt * 1000)
      .toString()
      .slice(0, 3);

    const forecastHigh = document.querySelector(`.forecast-high-${i}`);
    forecastHigh.textContent = Math.round(data.daily[i].temp.max);

    const forecastLow = document.querySelector(`.forecast-low-${i}`);
    forecastLow.textContent = Math.round(data.daily[i].temp.min);
    forecastLow.textContent += '°';
  }
}

// direct geocoding: https://openweathermap.org/api/geocoding-api
// convert location/zip/post code to coordinates
async function getCoords(/* input div */ input) {
  try {
    location = input.value;
    GeoToCoord = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api}`;

    const coord = await fetchApi(GeoToCoord);
    lat = coord[0].lat;
    lon = coord[0].lon;
    baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly&lat=${lat}&lon=${lon}&APPID=${api}&units=${metrics}`;

    const newData = await fetchApi(baseUrl);
    await displayData(newData);
  } catch (err) {
    throw console.log(`error in getCoords(): ${err}`);
  }
}

function menuFunctions() {
  // slides menu into window
  const widget = document.querySelector('.widget');
  const menuDiv = document.querySelector('.menu-div');
  const input = document.querySelector('input');
  widget.addEventListener('click', () => {
    menuDiv.classList.toggle('open');
    // input.focus();
  });

  // slide menu out of window - 'Enter' hotkey

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      menuDiv.classList.remove('open');
      getCoords(input);
    }
  });

  // slide menu out of window - clicking out of input div
  menuDiv.addEventListener('click', (event) => {
    if (event.target.className === 'menu-div open') {
      menuDiv.classList.remove('open');
      getCoords(input);
    }
  });
}

// set page, fetch api, and show data
(async function init(url) {
  generateBody();
  menuFunctions();
  const data = await fetchApi(url);
  displayData(data);
}(baseUrl));
