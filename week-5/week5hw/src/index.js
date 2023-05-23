let now = new Date();
let li = document.querySelector("#date");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let minutes = now.getMinutes();
let hour = now.getHours();

// Challange 1: Current Date
li.innerHTML = `<strong>${day} ${hour}:${minutes}</strong>`;

//Challange 2: Global weather
function grabCity() {
  const cityInput = document.querySelector("#city-input");
  var cityVar = cityInput.value;
  return cityVar;
}

function onDemandWeather(event) {
  event.preventDefault();
  const city = grabCity();
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${city[0].toUpperCase() + city.substring(1)}`;
  let apiKey = "b9619ecaa98342d29f766dd209dbab25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
    const weatherData = response.data;
    //console.log(weatherData);

    let liDescription = document.querySelector("#description");
    liDescription.innerHTML = `${weatherData.weather[0].description}`;

    let spanClassTemp = document.querySelector("#temperature");
    spanClassTemp.innerHTML = `${weatherData.main.temp}`;

    let liHumid = document.querySelector("#humidity");
    liHumid.innerHTML = `${weatherData.main.humidity}`;

    let liWind = document.querySelector("#wind");
    liWind.innerHTML = `${weatherData.wind.speed}`;
  });
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", onDemandWeather);

//Challange 3: Current Geolocation coordinates{

let button = document.querySelector("#current-location-button");
button.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;

    // console.log("Latitude for current position is: " + lat);
    // console.log("Longitude for current position is: " + lon);

    axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
      const weatherData = response.data;
      console.log(weatherData);

      let h1 = document.querySelector("#city");
      h1.innerHTML = `${weatherData.name} (${lat}, ${lon})`;

      let liDescription = document.querySelector("#description");
      liDescription.innerHTML = `${weatherData.weather[0].description}`;

      let spanClassTemp = document.querySelector("#temperature");
      spanClassTemp.innerHTML = `${weatherData.main.temp}`;

      let liHumid = document.querySelector("#humidity");
      liHumid.innerHTML = `${weatherData.main.humidity}`;

      let liWind = document.querySelector("#wind");
      liWind.innerHTML = `${weatherData.wind.speed}`;
    });
  });
});
