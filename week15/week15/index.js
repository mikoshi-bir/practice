const [moscow, saint, nyc, tokyo] = document.getElementById("cities").children;

document.getElementById("cities");

const appendWeatherToElement = (element, weather) =>
  (element.textContent += ` ${weather} °C`);

const weathers = [];

for (const city of [moscow, saint, nyc, tokyo]) {
  const weather = prompt(city.textContent);
  weathers.push(Number(weather));
  appendWeatherToElement(city, weather);
}

const maxWeather = Math.max(...weathers);
const minWeather = Math.min(...weathers);

const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");


maxTemp.textContent += ` ${maxWeather} °C`;
minTemp.textContent += ` ${minWeather} °C`;
