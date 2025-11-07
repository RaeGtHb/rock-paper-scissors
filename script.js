console.log("Hello World")

function getComputerPick() {
  function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const computerChoiceNumber = getComputerChoice(1, 3);
  let computerPick;

  if (computerChoiceNumber === 1) {
    computerPick = "Rock";
  } else if (computerChoiceNumber === 2) {
    computerPick = "Paper";
  } else {
    computerPick = "Scissors";
  }

  console.log(computerPick);
}

getComputerPick();

function getHumanChoice() {
  const pick = prompt("0 - Rock? 1 - Paper? 2 - Scissors?")

  if (pick === 'Rock') {
    console.log("Rock")
  } else if (pick === 'Paper') {
    console.log("Paper")
  } else if (pick === 'Scissors'){
    console.log("Scissors")
  } else {
    console.log("Invalid Input")
  }
}

getHumanChoice()

let humanScore = 0
let computerScore = 0

console.log(humanScore)
console.log(computerScore)