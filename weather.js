const weather = document.querySelector(".js-weather");

const API_KEY = `87abeaea4b545a5f9d001490db7531e2`;
const COORDS = "coords";

function saveLocation(lat, lon) {
  const locationObj = {
    lat,
    lon,
  };
  localStorage.setItem(COORDS, JSON.stringify(locationObj));
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    saveLocation(lat, lon);
    const locObj = {
      lat,
      lon,
    };
    getWeather(locObj);
  });
}

function handleClick() {
  localStorage.removeItem(COORDS);
  location.reload(true);
}

function getWeather(position) {
  const lat = position.lat;
  const lon = position.lon;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (text) {
      const place = text.name;
      const feelsLike = text.main.feels_like;
      const temperature = text.main.temp;
      const icon = text.weather[0].icon;
      const iconImg = new Image();
      iconImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      iconImg.classList.add("iconImg");
      weather.appendChild(iconImg);
      const reAssign = document.createElement("button");
      reAssign.innerText = " 지역 재설정";
      reAssign.classList.add("reAssign");
      reAssign.addEventListener("click", handleClick);
      console.log(iconImg);
      const weatherTitle = document.createElement("div");
      weatherTitle.appendChild(reAssign);
      weatherTitle.classList.add("weatherTitle");
      const weatherExp = document.createElement("span");
      weatherExp.classList.add("weatherExp");
      weatherExp.innerText = `지역 :  ${place} \n 온도 : ${temperature} \n 체감온도 : ${feelsLike} `;
      weatherTitle.appendChild(weatherExp);
      weather.appendChild(weatherTitle);
    });
}

function loadWeather() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords !== null) {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords);
  } else {
    getLocation();
  }
}

function init() {
  loadWeather();
}
init();
