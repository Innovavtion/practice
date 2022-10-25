const background = document.querySelector(".color-background");
const text = document.querySelector(".color-text");

function changesBackgroundColor() {
  const getRandomColor = Math.floor(Math.random() * 16777215).toString(16);
  text.innerHTML = `#${getRandomColor}`;
  background.style.backgroundColor = `#${getRandomColor}`;
}

changesBackgroundColor();

background.addEventListener("click", changesBackgroundColor);
