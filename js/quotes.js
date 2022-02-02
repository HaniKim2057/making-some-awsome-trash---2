const quotes = [
  { quote: "000 random wise saying 000", author: "author 000" },
  { quote: "111 random wise saying 111", author: "author 111" },
  { quote: "222 random wise saying 222", author: "author 222" },
  { quote: "333 random wise saying 333", author: "author 333" },
  { quote: "444 random wise saying 444", author: "author 444" },
  { quote: "555 random wise saying 555", author: "author 555" },
  { quote: "666 random wise saying 666", author: "author 666" },
  { quote: "777 random wise saying 777", author: "author 777" },
  { quote: "888 random wise saying 888", author: "author 888" },
  { quote: "999 random wise saying 999", author: "author 999" },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
