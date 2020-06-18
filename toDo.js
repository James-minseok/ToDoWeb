const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const toDos_LS = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(toDo_LS, JSON.stringify(toDos));
}

function delBtn(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}

function printToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", delBtn);
  delBtn.classList.add("toDoRemove");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const newId = toDos.length + 1;
  li.id = newId;
  li.classList.add("toDo");
  delBtn.id = newId;
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDos(currentValue);
  toDoInput.value = "";
}

function printParsed() {
  printToDos(toDo.text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(toDos_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(printParsed);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
