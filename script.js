// write a function that returns a rock paper or scissor
function getComputerChoice() {

    choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock"
    } else if (choice === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return String(choice)
}

// write a function that takes the human choice and returns it
function getHumanChoice() {
    let choice = prompt("rock paper or scissors?")
    return  choice.toLowerCase();
}
let rounds = 0;
function roundsCounter(){
    if(rounds < 10){
    return "this game lasted: " + rounds + " rounds!" 
}else if(rounds <20){
    return "WOW that was a long game! it lasted: " + rounds + " rounds"
}
}

//  the logic to play an entire game
function playGame() {
    // create a tracker of the player points using variables
    let humanScore = 0;
    let computerScore = 0;
    
    //  the logic to play a single round

    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {

            return "computer chose: " + computerChoice + "." + "\nhuman chose: " + humanChoice + "." + "\ncomputer wins the round!" + "\ncomputer: " + ++computerScore + "\nhuman: " + humanScore
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {

            return "computer chose: " + computerChoice + "." + "\nhuman chose: " + humanChoice + "." + "\nhuman wins the round!" + "\ncomputer: " + computerScore + "\nhuman: " + ++humanScore
        } else {
            return "computer chose: " + computerChoice + "." + "\nhuman chose: " + humanChoice + "." + "\nthis round's a tie!" + "\ncomputer: " + computerScore + "\nhuman: " + humanScore
        }

// the logic that increases the rounds based on the score of the players 
    }
    while( computerScore < 5 || humanScore < 5){
        console.log(playRound(getComputerChoice(), getHumanChoice()))
        rounds++
        if(computerScore === 5 && humanScore < 5){
            return "computer won the game!"
        }else if(humanScore === 5 && computerScore < 5){
            return "human won the game!"
        }
    }
        
        }

// the main function call
console.log(playGame())
console.log(roundsCounter())
