const blockQuote = document.querySelector(".block-quote");
const quote = document.querySelector(".text-quote");
const author = document.querySelector(".author-quote");

const quotes = {
  "Альберт Эйнштейн": "Чем умнее человек, тем легче он признает себя дураком",
  "Теодор Рузвельт": "Никогда не ошибается тот, кто ничего не делает",
  "Леонардо да Винчи": "Не оборачивается тот, кто устремлён к звёздам",
};

function getRandomQuote() {
  const authors = Object.keys(quotes); // Возвращает массив имен
  const getAuthor = authors[Math.floor(Math.random() * authors.length)]; // Выбираем рандомного автора
  const getQuote = quotes[getAuthor];

  quote.innerHTML = getQuote;
  author.innerHTML = " - " + getAuthor + " - ";
}

getRandomQuote();

blockQuote.addEventListener("click", getRandomQuote);
