var quotes = [
  "The one thing certain is that nothing is certain.",
  "The best preparation for tomorrow is doing your best today.",
  "Success usually comes to those who are too busy to be looking for it."
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('quote').innerHTML = '"' + randomQuote() + '"';
