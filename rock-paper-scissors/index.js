const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
