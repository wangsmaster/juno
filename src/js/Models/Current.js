import axios from 'axios';
import { renderError, clearLoader } from '../Views/base';

// Turn navigator.getCurrentPosition in a Promise
function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) =>
        reject(
          Object.assign(new Error(message), { name: 'PositionError', code })
        ),
      options
    );
  });
}

// Class for the current weather
export default class Current {
  constructor() {
    this.coords = [];
  }

  // Get coords of current location
  async getCoords() {
    try {
      const data = await getCurrentLocation({
        enableHighAccuracy: true,
        maximumAge: 0,
      });
      this.coords = [data.coords.latitude, data.coords.longitude];
    } catch (err) {
      // If error
      // Div of main weather
      const parent = document.querySelector('.main__weather');

      // Clear loader
      clearLoader(parent);

      // Render error
      renderError(parent, 'You have to enable the location.');
    }
  }

  // Check if coords are on the object
  coordAvailable() {
    return this.coords.length;
  }

  // Get weather for current location
  async getWeather() {
    try {
      const res = await axios.get(
        // `process` is a global object (of NodeJS) that provide information about, and control over the current Node.js process
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords[0]}&lon=${this.coords[1]}&units=metric&appid=${process.env.APIKEY}`
      );
      
      // // save all weather info in json object
      // this.weatherJSON = res.data;

      // Save the data on the object
      this.name = res.data.name;
      this.country = res.data.sys.country;
      this.weather = {
        temp: Math.round(res.data.main.temp),
        temp_max: Math.round(res.data.main.temp_max + 5), // max temp adjusted by +5C; this is due to offset between openweathermap API and google/apple weather app
        temp_min: Math.round(res.data.main.temp_min),
        name: res.data.weather[0].main,
        icon: res.data.weather[0].icon,
        weatherID: res.data.weather[0].id,
        // add wind speed (m/s)
        wind: Math.round(res.data.wind.speed),
        strongWindWarning: (res.data.wind.speed > 5.5 ? "strong wind" : ""),
      };
      console.log("getWeather is executed")
    } catch (err) {
      // Div of main weather
      console.log(err)
      const parent = document.querySelector('.main__weather');

      // Clear loader
      clearLoader(parent);

      // Render error
      renderError(parent, 'There was some problem getting the weather');
    }
  }
}
