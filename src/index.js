function displayWeather(response) {
    let currentWeather = document.querySelector("#current-Weather");
    let temperature = (response.data.temperature.current);
    let mainCity = document.querySelector("#main-City");
let currentCondtion = document.querySelector("#current-Condtion");
let currentHumidityData = document.querySelector("#current-Humidity-Data");
let currentWindSpeedData = document.querySelector("#current-Wind-Speed-Data");
let wind = (response.data.wind.speed);
let currentTime = document.querySelector("#current-Time");
let date = new Date(response.data.time * 1000)
    console.log(response.data.wind.speed);


    currentTime.innerHTML = formatDate(date);
    currentWindSpeedData.innerHTML = `${Math.round(wind)} Mph`;
    currentHumidityData.innerHTML = `${response.data.temperature.humidity}%`;
    currentCondtion.innerHTML = response.data.condition.description;
    mainCity.innerHTML = response.data.city;
    currentWeather.innerHTML = Math.round(temperature);
}

function formatDate(date) {

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

if (hours < 10 ) {
    let hours = `0${hours}`
};

if (minutes < 10 ) {
    let minutes = `0${minutes}`
};

let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`
}

function searchCity(city){
    let apiKey = "50a8380f4oe8265a54940c506tc9b3e0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayWeather);
}

function searching(event) {
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-Form-Input");
    

searchCity(searchFormInput.value)
}

let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit", searching);

searchCity("New York City")