
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

    if (computerSelection == "rock" && playerSelection == "scissor") {
        return computerWon;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return computerWon;
    } else if (computerSelection == "scissor" && playerSelection == "paper") {
        return computerWon;
    } else if (computerSelection == "scissor" && playerSelection == "rock") {
        return playerWon;
    } else if (computerSelection == "paper" && playerSelection == "scissor") {
        return playerWon;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return playerWon;
    } else {
        return "It's a tie";
    }
}

  

// plays 5 rounds// 
function game() {
    let score;
    for(let i = 0; i < 5; i++) {
        score = playRound(userPlay, computerPlay());
      } 
    return score;
}

