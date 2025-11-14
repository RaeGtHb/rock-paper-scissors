# rock-paper-scissors

First Project in Javascript

Rock < Paper
Paper < Scissors
Scissors < Rock

Rock > Scissors
Scissors > Paper
Paper > Rock

Rock === Rock && Paper === Paper && Scissors === Scissors

const rock = 0;
const paper = 1;
const scissors = 2;


----> First Create a Function getComputerChoice()
--> this code is for when you have a range
function getComputerChoice(max, min){
  return Math.floor(Math.random() * (max - min)) + min;
}

let choices = getComputerChoice(1, 4);

console.log(choices)


--> this code for 0 to max
function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(3));


--> this code has a return so it will be defined as a return value
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

getComputerPick();


----> Second Create a Function getHumanChoice()
--> this code ask you what choice you pick?
--> this code is complete for function
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


---> this code will tell you that you pick a string value with a case sensitive
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

getHumanChoice();


----> Third Create a Variables to score the game
let humanScore = 0
let computerScore = 0


----> Fourth Create a Function playRound
--> the algorithm of the game
--> in here it will add the score and tell who win or lose
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
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


--> this code is for more details in winning or losing
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // for ()
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)


----> Fifth Create a Function playGame
--> it has 5 rounds
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