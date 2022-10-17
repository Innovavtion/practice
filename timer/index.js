const displayTimer = document.querySelector(".display-timer"); // Получение дум элемента из html

let timerBegin = null; // Когда запустился таймер
let timerStop = null; // Когда остановился таймер
let timerStopDuration = 0; // Как долго был приостановлен таймер
let timerStartInterval = null; // Данная переменная требуется остановки метода startInterval()
let timerFlag = false; // Контроль запуска/остановки таймера

// Прослушивание события при клике на display-timer
displayTimer.addEventListener("click", () => {
  if (!timerFlag) {
    startTimer();
    timerFlag = true;
  } else {
    stopTimer();
    timerFlag = false;
  }
});

// Прослушивание события при двойном клике на display-timer
displayTimer.addEventListener("dblclick", () => {
  resetTimer();
});

// Две функции для запуска и стопа таймера
function startTimer() {
  if (timerBegin === null) timerBegin = new Date(); // Создается новый экземпляр класса Data
  if (timerStop !== null) timerStopDuration += new Date() - timerStop; // Вычисляем как долго уже преостановлен таймер
  timerStartInterval = setInterval(clockRunnig, 10); // SetInterval - позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
}

function stopTimer() {
  timerStop = new Date(); // Получаем время остановки таймера
  clearInterval(timerStartInterval); // Отчищаем интервал, передавая туда timerStartInterval
}

// Вызывается в setInterval() функции startTimer()
function clockRunnig() {
  let timerCurrentTime = new Date(); //Получаем текущее время
  let timerTimeElapsed = new Date(
    timerCurrentTime - timerBegin - timerStopDuration
  ); //Истекшее время
  let timerMinutes = timerTimeElapsed.getUTCMinutes(); // Получение истекших минут
  let timerSeconds = timerTimeElapsed.getUTCSeconds(); // Получение истекших секунд
  let timerMilliSeconds = timerTimeElapsed.getUTCMilliseconds(); // Получение истекших миллисекунд

  timerMilliSeconds = Math.floor(timerMilliSeconds / 10); // Округление меньшую сторону

  // Изменение lev элемента
  displayTimer.innerHTML =
    (timerMinutes < 10 ? "0" + timerMinutes : timerMinutes) +
    ":" +
    (timerSeconds < 10 ? "0" + timerSeconds : timerSeconds) +
    ":" +
    (timerMilliSeconds < 10 ? "0" + timerMilliSeconds : timerMilliSeconds);
}

// Выставляет все значения на начальные
function resetTimer() {
  clearInterval(timerStartInterval);
  timerBegin = null;
  timerStop = null;
  timerStopDuration = 0;
  displayTimer.innerHTML = "00:00:00";
  timerFlag = false;
}
