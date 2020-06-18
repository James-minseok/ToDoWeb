const body = document.querySelector("body");

function paintImage(randomNumber) {
  const image = new Image();
  image.src = `./js-imgs/${randomNumber + 1}.jpg`;
  image.classList.add("bgimage");
  body.appendChild(image);
}
function getRandom() {
  const Number = Math.floor(Math.random() * 4);

  return Number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
