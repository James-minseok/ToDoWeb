const body = document.querySelector("body");

function paintImage(randomNumber) {
  const bgImage = new Image();
  bgImage.src = `./js-imgs/${randomNumber + 1}.jpg`;
  bgImage.classList.add("bgimage");
  body.appendChild(bgImage);
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
