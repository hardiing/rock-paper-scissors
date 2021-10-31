const choices = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;
let totalGames = 0;

function computerPlay() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer throws " + computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        totalGames++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerWins++;
        totalGames++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    let computerSelection = computerPlay().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
}

while (totalGames < 5) {
    game();
}
