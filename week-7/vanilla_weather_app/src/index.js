function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let apiKey = "f2f8fa7c83899cc436t9bfbo024d31c4";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

function displayTemperature(response) {
  const weatherData = response.data;
  console.log(weatherData);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(weatherData.temperature.current);
  cityElement.innerHTML = weatherData.city;
  descriptionElement.innerHTML = weatherData.condition.description;
  humidityElement.innerHTML = weatherData.temperature.humidity;
  windElement.innerHTML = weatherData.wind.speed;
  dateElement.innerHTML = formatDate(weatherData.time * 1000);
}
axios.get(apiUrl).then(displayTemperature);
