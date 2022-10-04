//scoreboard
let playerScore = 0;
let computerScore = 0;


// chooses randomly between rock, paper, and scissor//
let elements = ["rock", "paper", "scissor"];
function computerPlay() {
    let computerResult = elements[Math.floor(Math.random() * elements.length)];
    return computerResult;
}

// One round of rock, paper, and scissor
function roundOne(computerSelection, playerSelection) {
    let playerWon = `You won. ${playerSelection} beats ${computerSelection}`;
    let computerWon = `You lost. ${computerSelection} beats ${playerSelection}`;
    if ((computerSelection == "rock" && playerSelection == "scissor") || 
    (computerSelection == "paper" && playerSelection == "rock") || 
    (computerSelection == "scissor" && playerSelection == "paper")) {
        computerScore++
        console.log(computerWon);
    } else if ((computerSelection == "scissor" && playerSelection == "rock") || 
    (computerSelection == "paper" && playerSelection == "scissor") || 
    (computerSelection == "rock" && playerSelection == "paper")) {
        playerScore++
        console.log(playerWon);

    } else {
        console.log("It's a tie");
    }
}

// selectors

let rockButton = document.getElementById("rockBtn");
let scissorButton = document.getElementById("scissorBtn");
let paperButton = document.getElementById("paperBtn");


// input player's choice to the game   
rockButton.addEventListener('click', ()=> game('rock'))
scissorButton.addEventListener('click', ()=> game('scissor'))
paperButton.addEventListener('click', ()=> game('paper'))
    
 //restart game
function restart(){
    playerScore == 0 && computerScore == 0;
}    
// check who's the winner
function roundWinner() {
    if (playerScore == 5 ) {
        alert("player is the WINNER")
        restart()
    } else if (computerScore == 5) {
        alert("Computer is the WINNER")
        restart()
    }

}

 function game(playerChoice) {
    roundWinner();
    roundOne(computerPlay(), playerChoice);
}
