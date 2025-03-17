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

// first i have to ask the user to input rock paper or scissors

function getHumanChoice() {
    let choice = prompt("rock paper or scissors?")
    return  choice.toLowerCase();
}


//  the logic to play an entire game

function playGame() {
    // create a tracker of the player points using variables
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    //  the logic to play a single round

    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {

            return "computer chose: " + computerChoice + "." + "\nhuman chose: " + humanChoice + "." + "\ncomputer wins!" + "\ncomputer: " + ++computerScore + "\nhuman: " + humanScore
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {

            return "human chose: " + humanChoice + "." + "\ncomputer chose: " + computerChoice + "." + "\nhuman wins the round!" + "\ncomputer: " + computerScore + "\nhuman: " + ++humanScore
        } else {
            return "computer chose: " + computerChoice + "." + "\nhuman chose: " + humanChoice + "." + "\nit's a tie!" + "\ncomputer: " + computerScore + "\nhuman: " + humanScore
        }
    }
    while( rounds < 5){
        console.log(playRound(getComputerChoice(), getHumanChoice()))
        rounds++
    }
    if(computerScore === 5 && humanScore < 5){
        return "computer won"
    }else if(humanScore === 5 && computerScore < 5){
        return "human won"
    }else{
        "remactch?"
    }
}
console.log(playGame())

// passo 1 prendere il numero del computer 
// passo 2 prendere il numero del umano
// passo 3 assegnarli alle variabili computerselection e humanselection
// passo 4 ripetere l'assegnazione
// 