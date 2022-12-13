'use strict'
const computerChoiceshower = document.getElementById('computer-choice')
const userChoiceshower = document.getElementById('user-choice')
const resultDisplay = document.getElementById('resulting')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice
let resulted
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  generateComputerChoice()
    userChoice = e.target.id
    userChoiceshower.innerHTML = userChoice
   
    getResult()
    
})) 
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computerChoice = " rock"
    }
    else if(randomNumber === 2){
        computerChoice = " scissor"
    }
    else if(randomNumber === 3){
        computerChoice = " paper"
    }
    computerChoiceshower.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
      resulted.innerHTML = 'its a draw!'}
    if (computerChoice === 'rock' && userChoice === "paper") {
      resulted.innerHTML = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      resulted.innerHTML = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      resulted.innerHTML = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      resulted.innerHTML = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      resulted.innerHTML = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      resulted.innerHTML = 'you lose!'
    }
    resultDisplay.innerHTML = resulted
  }


//flkjsdklfjklsdjlf
