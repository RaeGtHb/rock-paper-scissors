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

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
    console.log("You Win! Rock beats Scissors")
    humanScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    console.log("You Win! Paper beats Rock")
    humanScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
    console.log("You Win! Scissors beats Paper")
    humanScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
    console.log("You Lose! Paper beats Rock")
    computerScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
    console.log("You Lose! Scissors beats Paper")
    computerScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
    console.log("You Lose! Rock beats Scissors")
    computerScore++;
    console.log(humanScore)
    console.log(computerScore)
  } else {
    console.log("Draw!")
    console.log(humanScore)
    console.log(computerScore)
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection)
}

for (let rounds = 1; rounds <= 5; rounds++) {
  console.log(`Round ${rounds}`);
  playGame();

  if (rounds === 5) {
    if (humanScore >= computerScore) {
      console.log("Victory!")
    } else if (humanScore <= computerScore) {
      console.log("Defeat!")
    } else {
      console.log("Tie!")
    }
  }
}