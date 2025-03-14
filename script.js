// write a function that returns a rock paper or scissor

function getComputerChoice(choice){
    
    choice = Math.floor(Math.random()* 3) +1;
    if(choice === 1){
        choice= "rock"
    }else if(choice === 2){
        choice= "paper"
    }else{
        choice = "scissors"
    }
    
    return String(choice)
}
// write a function that takes the human choice and returns it

// first i have to ask the user to input rock paper or scissors
let usrchoice = prompt("rock paper or scissors?")
function getHumanChoice(){
    return usrchoice
}


// create a tracker of the player points using variables
let humanScore = 0;
let computerScore = 0;

// write the logic to play a single round

function playRound(HumanChoice, computerChoice){
HumanChoice.toLowerCase();
switch(HumanChoice, computerChoice){
    case((getHumanChoice === "rock" && getComputerChoice === "scissors") || (getHumanChoice() === "paper" && getComputerChoice() === "rock") || (getHumanChoice() === "scissors" && getComputerChoice() === "paper")):
    return "human wins the round!"
    break
    
    case((getComputerChoice() === "rock" && getHumanChoice === "scissors") || (getComputerChoice() === "paper" && getHumanChoice() === "rock") || (getComputerChoice === "scissors" && getHumanChoice() === "paper")):
    return "Computer wins the round!"
    break
}

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
console.log(playRound(humanSelection, computerSelection));

// write the logic to play the entire game