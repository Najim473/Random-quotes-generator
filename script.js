const btn = document.getElementById("btn");
const outPut = document.getElementById("output");
let quote = [
  '"The pessimis Sees Difficulty In Evevry Opportunity. The Optimist Sees Opportunity In Every Difficulty." -Winston Churchill',
  '"Don\'t Let Yesterday Take Up too Much Of Today." - Will Rogers',
  '"You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character." -Unknown',
  "\"It's Not Whether You Get Knocked Down, It's Whether You Get Up.\" - Inspirational Quote By Vince Lombardi",
  '"If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You." - Steve Jobs',
  '"Entreprenuer Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur." - Mohnish Pabrai',
  '"We May Encounter Many Defeats But We Must Not Be Defeated." - Maya Angelou',
  '"Knowing Is Not Enough: We Must Apply. Wishing Is Not Enough; We Must Do." - Johann Wolfgang Von Goethe',
];
btn.addEventListener("click", () => {
  var newRandom = quote[Math.floor(Math.random() * quote.length)];
  outPut.innerHTML = newRandom;
});
