function displayTemperature(response) {
  console.log(Math.round(response.data.wind.speed));
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e450bc345a80a08ada69fd5c714d871d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ormond Beach&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
