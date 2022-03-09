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
Weather focuses on the fetch, async, and await functions to pull API data from OpenWeather. I wanted to make my app a widget to practice more phone-like features like a drop-down menu. In this case, the search menu slides into view from off-screen.

The search menu also has a unit conversion button, which is a parameter set by the API. Setting the parameter to "imperial" or "metric" returns the requested conversion type.

## Challenges
### HTTP vs HTTPS - Mixed content error
OpenWeather provides its links like the one below:
```
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
```

Using this link returns an error in Firefox's console:
```
Blocked loading mixed active content "http://api.openweathermap.org/..."
```

I learned from [the link provided in the console](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) that "http" is also known as "mixed content", which means that this link is only partially encrypted. 

To resolve this issue, I had to change "http://" to "https://".

### Pulling the right data - Coordinates and a 5-day forecast
OpenWeather has a variety of APIs and it was not as straightforward as I originally thought. Originally, I used an API that pulled current weather, which provided detailed information about the day. I, however, had to use a different API from OpenWeather that contained the multi-day forecast. This API is called [One Call API](https://openweathermap.org/api/one-call-api). It contained all the information I wanted to display on my app! Unlike the current weather API, One Call API required latitude and longitude parameters instead of location name.

OpenWeather has an API that converts search terms like "Salt Lake City" to its latitude and longitude equivalents. I then use those latitude and longitude parameters on the One Call API to get today's weather and its 5-day forecast.
