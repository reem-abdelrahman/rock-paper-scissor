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
        roundWinner()
    } else if ((computerSelection == "scissor" && playerSelection == "rock") || 
    (computerSelection == "paper" && playerSelection == "scissor") || 
    (computerSelection == "rock" && playerSelection == "paper")) {
        playerScore++
        console.log(playerWon);
        roundWinner()
    } else {
        console.log("It's a tie");
        roundWinner()
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
        alert("player won")
        restart()
    } else if (computerScore == 5) {
        alert("computer won")
        restart()
    }

}

/* function game(playerChoice) {
    for(let i = 0; i < 5; i++) {
    roundOne(computerPlay(), playerChoice);
    }
    console.log("yay you played 5 rounds")
    restart()
    
} */
