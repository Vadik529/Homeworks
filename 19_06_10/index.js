const weatherInfo = document.getElementById("weatherInfo");
const weatherForm = document.getElementById("weatherForm");

let city = null;

const dateNow = document.querySelector(".date");
const temp = document.querySelector(".temp");
const place = document.querySelector(".place");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");
const deg = document.querySelector(".deg");
const icon = document.createElement("img");


weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  weatherInfo.classList.remove("invisible");

  let city = this.input.value;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const date = new Date();
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };

      dateNow.innerText = date.toLocaleDateString("ru", options);
      temp.innerText = data.main.temp;
      place.innerText = city;
      humidity.innerText = data.main.humidity;
      wind.innerText = data.wind.speed;
      description.innerText = data.weather[0].description;
      deg.innerText = data.wind.deg;
      
      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      );
      icon.classList.add("icon");
      document.querySelector(".weatherIcon").append(icon);
    });
  this.reset();
});
