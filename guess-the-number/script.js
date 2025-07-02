let secretNum;
let attempts;
let guessList = [];

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const guesses = document.getElementById("guesses");
const startBtn = document.getElementById("startGame");
const submitBtn = document.getElementById("submitGuess");

function startGame() {
  secretNum = Math.floor(Math.random() * 100 + 1);
  attempts = 0;
  guessList = [];

  guessInput.disabled = false;
  submitBtn.disabled = false;
  message.textContent = "";
  guesses.textContent = "Your Guesses: ";
  guessInput.value = "";
  guessInput.focus();
}

function checkGuess() {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100";
    return;
  }
  attempts++;
  guessList.push(guess);
  guesses.innerText = `Your Guesses: ${guessList.join(", ")}`;

  if (guess === secretNum) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    endGame();
  } else if (guess < secretNum) {
    message.textContent = `Your Guess is too low!`;
  } else {
    message.textContent = `Your Guess is too high!`;
  }

  guessInput.value = "";
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
}

submitBtn.addEventListener("click", checkGuess);
startBtn.addEventListener("click", startGame);

startGame();

guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkGuess();
  }
});
