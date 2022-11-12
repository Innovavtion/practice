const currentDate = document.querySelector(".current-date"),
  days = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons span"); // Берем обе икконки(span) из класса icons

let date = new Date(),
  currentYear = date.getFullYear(), // Получаем текущий год type number
  currentMonth = date.getMonth(); // Получем текущий месяц type number

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); // Получаем первый день месяца
  let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Получаем последние число месяца. (currentMonth + 1 - получить текущий месяц)
  let lastDayofMonth = new Date(
    currentYear,
    currentMonth,
    lastDateofMonth
  ).getDay(); // Получаем последний день месяца
  let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // Получаем  последние число предидущего месяца
  let liTag = "";

  // Выводим числа прошлого месяца
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive-data">${lastDateofLastMonth - i + 1}</li>`; // Последние число предидущего месяцы - Первые
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // Проверяем текущий ли день мясяца
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active-data"
        : "";

    liTag += `<li class="${isToday}">${i}</li>`; // Добавляем тег li с каждой итерацией
  }

  // Выводим числа следующего месяца
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive-data">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`; // Добавляем текущий месяц и год
  days.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Делаем клик и если icon id равен prev - то делаем - 1, иначе + 1
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      // Создание новой даты предидущего или следующуго года
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear(); // Обновляем текущий год полученой из date
      currentMonth = date.getMonth(); // Обновляем текущий месяц полученой из date
    } else {
      // Иначе получем текущий год
      date = new Date();
    }
    renderCalendar();
  });
});
