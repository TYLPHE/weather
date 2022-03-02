import bodyContent from './bodyContent';
// widget to display weather data
const widget = {
  init: () => {
    // attach high/low temps to nowTempDiv container
    const highLow = widget.nowHighLowDiv();
    const slash = document.createElement('div');
    slash.textContent = '/';
    highLow.append(
      widget.nowHigh(),
      slash,
      widget.nowLow(),
    );

    // attach temp divs to today container
    const currentTemp = widget.nowTempDiv();
    currentTemp.append(
      widget.nowTemp(),
      highLow,
    );

    // place nowTempDiv and conditions to div and append to widget
    const conditionDiv = widget.conditionDiv();
    conditionDiv.append(
      currentTemp,
      widget.condition(),
    );
    // append everything to widget container
    const widgetBody = widget.body();
    widgetBody.append(
      widget.location(),
      conditionDiv,
      widget.forecastDiv(),
    );

    // create a main absolute window to hide popup menu
    // append widget and menu to this so it can create popup effect
    const widgetWindow = document.createElement('div');
    widgetWindow.classList.add('widget-window');
    widgetWindow.append(
      widgetBody,
      widget.menu(),
    );
    return widgetWindow;
  },

  // main widget body
  body: () => {
    const body = document.createElement('div');
    body.classList.add('widget');
    return body;
  },

  // div to display location
  location: () => {
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    return locationDiv;
  },

  // div to show today's condition
  today: () => {
    const today = document.createElement('div');
    today.classList.add('today-div');
    return today;
  },

  // div to contain current temp and high/low temp
  nowTempDiv: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-temp-div');
    return temp;
  },
  nowTemp: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-temp');
    return temp;
  },

  // div to contain high/low temp. to be attached to now-temp-div
  nowHighLowDiv: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-high-low-div');
    return temp;
  },
  nowHigh: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-high');
    return temp;
  },
  nowLow: () => {
    const temp = document.createElement('div');
    temp.classList.add('now-low');
    return temp;
  },

  // div to display condition, for example, 'clear sky'
  conditionDiv: () => {
    const conditionDiv = document.createElement('div');
    conditionDiv.classList.add('condition-div');
    return conditionDiv;
  },
  condition: () => {
    const condition = document.createElement('div');
    condition.classList.add('condition');
    return condition;
  },

  // div to display 5-day forecast
  forecastDiv: () => {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast-div');
    for (let i = 1; i <= 5; i += 1) {
      const forecastDayDiv = document.createElement('div');
      forecastDayDiv.classList.add('forecast-day-div');

      const forecastHigh = document.createElement('div');
      forecastHigh.classList.add(`forecast-high-${i}`);

      const forecastLow = document.createElement('div');
      forecastLow.classList.add(`forecast-low-${i}`);

      const slash = document.createElement('div');
      slash.textContent = '/';

      const forecastHighLow = document.createElement('div');
      forecastHighLow.classList.add('forecast-high-low');
      forecastHighLow.append(
        forecastHigh,
        slash,
        forecastLow,
      );
      const day = document.createElement('div');
      day.classList.add(`day-${i}`);
      forecastDayDiv.append(
        day,
        forecastHighLow,
      );
      forecastDiv.appendChild(forecastDayDiv);
    }

    return forecastDiv;
  },
  menu: () => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const label = document.createElement('label');
    label.for = 'location-input';
    label.textContent = 'Location:';

    const locationInput = document.createElement('input');
    locationInput.id = 'location-input';

    menuDiv.append(
      label,
      locationInput,
    );

    return menuDiv;
  },
};

// generate overall website layout
const body = {
  init: () => {
    document.body.append(
      body.header(),
      widget.init(),
      body.intro(),
    );
  },
  header: () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(body.title());
    return header;
  },
  title: () => {
    const titleDiv = document.createElement('a');
    titleDiv.classList.add('title');
    titleDiv.target = '_blank';
    titleDiv.href = 'https://github.com/TYLPHE';

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = 'https://avatars.githubusercontent.com/u/85977718?v=4';

    const title = document.createElement('div');
    title.classList.add('title-text');
    title.innerText = 'Weather by TYLPHE';
    titleDiv.append(avatar, title);

    return titleDiv;
  },
  intro: () => {
    const intro = document.createElement('intro');
    intro.classList.add('intro');

    const p1 = document.createElement('p');
    p1.textContent = bodyContent.p1;

    const p2 = document.createElement('p');
    p2.textContent = bodyContent.p2;

    intro.append(p1, p2);
    return intro;
  },
};

export default body.init;
