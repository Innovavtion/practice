const day = document.querySelector(".day");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const timeDays = document.querySelector(".pm-am");
const daysWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateClock() {
  const date = new Date();

  // Форматирование времени под AM PM
  let hour = date.getHours();
  hour = hour % 12;
  hour = hour ? hour : date.getHours();

  // Изменение DOM элементов
  day.innerHTML = daysWeek[date.getDay()];
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  timeDays.innerHTML = hour >= 12 ? "PM" : "AM";
}

updateClock(); // Вызываем для получения даты

setInterval(updateClock, 10000); // Каждые 10 секунд получаем время и обновляем DOM элементы
