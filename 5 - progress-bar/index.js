const circularProgress = document.querySelector(".circular-progress");
const valueProgress = document.querySelector(".progress-value");

let startValueProgress = 0;
const endValueProgress = 75;
const speed = 35; // Скорость вызова setInterval

const progress = setInterval(() => {
  startValueProgress++;

  valueProgress.textContent = `${startValueProgress}%`;
  circularProgress.style.background = `conic-gradient(rgb(231, 167, 115) ${
    (startValueProgress / 100) * 360
  }deg, rgb(92, 90, 86) 0deg)`;

  if (startValueProgress === endValueProgress) {
    clearInterval(progress);
  }
}, speed);
