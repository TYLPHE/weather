# Weather
###### My first API fetching project
![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/weather.gif)

## Links
- [Try Weather here!](https://TYLPHE.github.io/weather/dist/)

- [Link to the Assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app)

## Features
- Fetches and displays API information from OpenWeather
- Convert data to Fahrenheit or Celsius

## About
Weather focuses on the fetch, async, and await functions to pull API data from OpenWeather. I wanted to make my app a widget to practice more phone-like features like a drop-down menu. In this case, the search menu slides from off-screen.

The search menu also has a unit conversion button.

## Challenges
OpenWeather provides its links like the one below:
```
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
```

Using this link returns an error in Firefox's console:
```
Blocked loading mixed active content "http://api.openweathermap.org/..."
```

I learned from [the link provided in the console](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) that http is also called "mixed content", which means that this link is only partially encrypted. 

To resolve this issue, I had to change "http://" to https://".
