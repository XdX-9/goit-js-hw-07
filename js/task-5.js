function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bColorTxt = document.querySelector(".color");
const backgroundC = document.querySelector(".change-color");

backgroundC.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bColorTxt.textContent = color;
  document.body.style.backgroundColor = color;
});
