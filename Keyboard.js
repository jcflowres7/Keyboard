var body = document.querySelector("body");

var lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var randomGuessedLetter = lettersArray[Math.floor(Math.random() * 26)];

function takeUserInput(event) {
  var eventCode = event.keyCode;
  var eventCharacter = String.fromCharCode(eventCode).toLocaleLowerCase();

  if (eventCharacter == randomGuessedLetter) {
    var h2 = document.createElement("h2");
    h2.innerText = `SECRET KEY PRESSED ${eventCharacter}`;
    body.appendChild(h2);
    randomGuessedLetter = lettersArray[Math.floor(Math.random() * 26)];
  }
}

body.addEventListener("keydown", takeUserInput);
