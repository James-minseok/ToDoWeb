const clockContainer = document.querySelector(".js-clock");
const date = document.querySelector(".dateTitle");
const clock = document.querySelector("h2");

function loadTime() {
  const time = new Date();
  const years = time.getFullYear();
  const months = time.getUTCMonth();
  const days = time.getDate();

  date.innerText = `${years}-0${months + 1}-${days}`;

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(loadTime, 1000);
}
init();
