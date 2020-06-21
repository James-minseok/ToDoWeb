const form = document.querySelector(".js-greetingForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const greetingTitle = greeting.querySelector("h2");
const removeName = greeting.querySelector(".greetingRemove");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function removeUser() {
  localStorage.removeItem(USER_LS);
  location.reload(true);
}

function takingX() {
  removeName.addEventListener("click", removeUser);
}

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function printGreeting(name) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greetingTitle.classList.add(SHOWING_CN);
  greetingTitle.innerText = `Hello ${name} :)`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  printGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);

  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}

function init() {
  loadName();
  takingX();
}

init();
