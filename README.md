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

--> this code ask you what choice you pick?
function getHumanChoice() {

}

Variables:
let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    --5 rounds
}