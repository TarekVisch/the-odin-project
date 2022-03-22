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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  while (round < 5) {
    const playerSelection = prompt("Rock, Paper, or Scissors")
      .toLowerCase()
      .trim();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
    console.log(roundResult.message);

    if (roundResult.roundWinner === "Player") playerScore++;
    if (roundResult.roundWinner === "Computer") computerScore++;

    round++;
  }

  console.log(
    `Score: \n Player: ${playerScore} Point(s)\n Computer: ${computerScore} Point(s)`
  );

  if (playerScore > computerScore) {
    console.log("You Have Won!");
  } else if (playerScore < computerScore) {
    console.log("You Have Lost!");
  } else {
    console.log("It's a tie");
  }
}

game();
