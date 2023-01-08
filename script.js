let apiKey = "e3ab8d9d9621733403e0f05963e16c60";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
function currentTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature} °F`;
  description.innerHTML = response.data.main.weather[0].description;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let currentButton = document.querySelector(".current");
  currentButton.addEventListener("click", getCurrentPosition);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentLocation(showPosition);
}

let now = new Date(); //current Date and Time
console.log(now.getDate());
let h2 = document.querySelector("h2");
h2.HTML = `Tue, 16:00 ${Date}`;

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 83;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
