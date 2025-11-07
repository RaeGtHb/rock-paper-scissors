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


--> this code is complete for function
function getComputerPick(){
  function getComputerChoice(max, min){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let choices = getComputerChoice(1, 4);

  if (choices === 1) {
    console.log("Rock")
  } else if (choices === 2) {
    console.log("Paper")
  } else {
    console.log("Scissors")
  }

  getComputerChoice()
}

getComputerPick()


--> for more clearer code
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

----> Third Create a Variables to score the game
let humanScore = 0
let computerScore = 0


----> Fourth Create a Function playRound
--> 
function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    --5 rounds
}