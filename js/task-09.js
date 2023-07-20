const changeColorBtn = document.querySelector(".widget");
const spanColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", function (){
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  spanColor.textContent = randColor;
});