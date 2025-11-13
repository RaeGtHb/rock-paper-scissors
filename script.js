function getComputerChoice() {
  function getComputerPick(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const computerChoiceNumber = getComputerPick(1, 3);
  let computerPick;

  if (computerChoiceNumber === 1) {
    return computerPick = "Rock";
  } else if (computerChoiceNumber === 2) {
    return computerPick = "Paper";
  } else {
    return computerPick = "Scissors";
  }
}

// getComputerChoice();

function getHumanChoice() {
  const pick = prompt("ROCK? PAPER? SCISSORS?")
  const pickLower = pick.toLowerCase().toUpperCase();

  if (pickLower === 'ROCK') {
    return 'Rock';
  } else if (pickLower === 'PAPER') {
    return 'Paper'
  } else if (pickLower === 'SCISSORS') {
    return 'Scissors'
  } else {
    console.log("Invalid Input")
  }
}

// getHumanChoice();

let humanScore = 0
let computerScore = 0

console.log(humanScore)
console.log(computerScore)

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Draw!")
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') || 
    (humanChoice === 'Paper' && computerChoice === 'Rock') || 
    (humanChoice === 'Scissors' && computerChoice === 'Paper'))
  {
    console.log("You Win!")
  } else {
    console.log("Computer Win!")
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection) 
