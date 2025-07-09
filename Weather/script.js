
const apikey = "f7f494c8d300f590c173c60ae15bfee3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".description").innerHTML = data.weather[0].description;

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "../images/Cloudy.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "../images/Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "../images/Drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "../images/Mist.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "../images/Snow.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "../images/Clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
