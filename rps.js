const choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;
let totalGames = 0;
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
//const currentRound = document.getElementById("current");
const computerMove = document.getElementById("computerMove");
const announcement = document.getElementById("announcement");
const scores = document.getElementById("scores");
const scoreboard = document.querySelector("#scoreboard");
const currentRound = document.createElement("h3");

function computerPlay() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerMove.textContent = "Computer throws " + computerChoice;
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        currentRound.textContent = "Tie game!";
        scoreboard.appendChild(currentRound);
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
               playerSelection == "scissors" && computerSelection == "paper" ||
               playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        totalGames++;
        currentRound.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        scoreboard.appendChild(currentRound);
        playerScore.textContent = `Player: ${playerWins}`;
        if (playerWins === 5) {
            announcement.textContent = "You win!";
        }
    } else {
        computerWins++;
        totalGames++;
        currentRound.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        scoreboard.appendChild(currentRound);
        computerScore.textContent = `Computer: ${computerWins}`;
        if (computerWins === 5) {
            announcement.textContent = "Computer wins!";
        }
    }
}

rock.addEventListener("click", () => {
    let playerSelection = "rock"
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
paper.addEventListener("click", () => {
    let playerSelection = "paper"
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
scissors.addEventListener("click", () => {
    let playerSelection = "scissors"
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

/* function game() {
    let playerSelection = prompt("Enter rock, paper, or scissors");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
 */
/* while (totalGames < 5) {
    game();
} */
