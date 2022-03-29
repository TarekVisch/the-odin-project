const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let round = 0;
let result = "";

// DOM
const mainHeadingDOM = document.getElementById("mainHeading");
const playAgainBtn = document.getElementById("playAgainBtn");
const rpsButtons = document.querySelectorAll(".rps-button");
const playerScoreDOM = document.getElementById("playerScore");
const computerScoreDOM = document.getElementById("computerScore");
const roundDOM = document.getElementById("round");
const resultDOM = document.getElementById("result");

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerSelection = "";

  switch (randomNumber) {
    case 1:
      computerSelection = ROCK;
      break;
    case 2:
      computerSelection = PAPER;
      break;
    case 3:
      computerSelection = SCISSORS;
      break;
  }

  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let result = { message: "", roundWinner: "" };

  if (playerSelection === computerSelection) {
    result.message = "It's a tie";
  } else if (playerSelection === ROCK) {
    if (computerSelection === SCISSORS) {
      result.message = "You Win! Rock beats Scissors";
      result.roundWinner = "Player";
    } else if (computerSelection === PAPER) {
      result.message = "You Loose! Paper beats Rock";
      result.roundWinner = "Computer";
    }
  } else if (playerSelection === PAPER) {
    if (computerSelection === ROCK) {
      result.message = "You Win! Paper beats Rock";
      result.roundWinner = "Player";
    } else if (computerSelection === SCISSORS) {
      result.message = "You Loose! Scissors beats Paper";
      result.roundWinner = "Computer";
    }
  } else if (playerSelection === SCISSORS) {
    if (computerSelection === PAPER) {
      result.message = "You Win! Scissors beats Paper";
      result.roundWinner = "Player";
    } else if (computerSelection === ROCK) {
      result.message = "You Loose! Rock beats Scissors";
      result.roundWinner = "Computer";
    }
  } else {
    result.message = "Invalid input";
    result.roundWinner = "Computer";
  }

  return result;
}

function removeIcons() {
  let selectionIcons = document.querySelectorAll(".rps-icons");
  selectionIcons.forEach((icon) => {
    icon.style.display = "none";
  });
}

function game(playerSelection, computerSelection) {
  let currentPlayerSelectionIconDOM = document.querySelector(
    `div[data-player=${playerSelection}]`
  );
  let currentComputerSelectionIconDOM = document.querySelector(
    `div[data-computer=${computerSelection}]`
  );

  removeIcons();
  currentPlayerSelectionIconDOM.style.display = "block";
  currentComputerSelectionIconDOM.style.display = "block";

  let roundResult = playRound(playerSelection, computerSelection);
  resultDOM.textContent = roundResult.message;

  if (roundResult.roundWinner === "Player") playerScore++;
  if (roundResult.roundWinner === "Computer") computerScore++;

  round++;

  playerScoreDOM.textContent = playerScore;
  computerScoreDOM.textContent = computerScore;
  roundDOM.textContent = `Round ${round}`;

  if (playerScore >= 5 || computerScore >= 5) {
    mainHeading.style.display = "none";
    playAgainBtn.style.display = "block";

    if (playerScore >= 5) {
      resultDOM.textContent = "Game Over. You Win!";
    }

    if (computerScore >= 5) {
      resultDOM.textContent = "Game Over. You Loose!";
    }
  }
}

rpsButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (playerScore == 5 || computerScore == 5) {
      return;
    }

    const playerSelection = e.currentTarget.id;
    const computerSelection = computerPlay();

    game(playerSelection, computerSelection);
  });
});

playAgainBtn.addEventListener("click", (e) => {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  result = "";

  removeIcons();
  roundDOM.textContent = "VS";
  playerScoreDOM.textContent = 0;
  computerScoreDOM.textContent = 0;
  resultDOM.textContent = "";
  mainHeading.style.display = "block";
  playAgainBtn.style.display = "none";
});
