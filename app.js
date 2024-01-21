let playerSelection
let computerSelection
let playerWin = false
let computerWin = false

let rockChoice = document.getElementById("rockBtn");
let paperChoice = document.getElementById("paperBtn");
let scissorsChoice = document.getElementById("scissorsBtn");

rockChoice.addEventListener("click", () => {
    playerSelection = "rock";
    playRound();
});
paperChoice.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
});
scissorsChoice.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
});

function capitalize(string) {
    string = string.split("")
    for(let i = 0; i < string.length; i++) {
        string[i] = (i === 0 ? string[i].toUpperCase() : string[i].toLowerCase())
    }
    return string.join("")
}

function getPlayerChoice() {
    playerSelection = buttons.textContent;
    return playerSelection
}

function getComputerChoice() {
    let options = [1, 2, 3]
    let choice = options[Math.floor(Math.random() * options.length)]
    if(choice === 1) {
        return "Rock"
    } else if(choice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound() {
    // getPlayerChoice()
    computerSelection = getComputerChoice();
    let playerOption = playerSelection.toLowerCase();
    let computerOption = computerSelection.toLowerCase()
    let gameBoard = document.getElementById("gameBoard");
    let results = document.createElement("div");
    
    if(playerOption === "rock" && computerOption === "scissors") {
        results.textContent = "You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption)
        gameBoard.appendChild(results);
        return playerWin = true
    } else if(playerOption === "rock" && computerOption === "paper") {
        console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
        return computerWin = true
    } else if(playerOption === "paper" && computerOption === "rock") {
        console.log("You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption))
        return playerWin = true
    } else if(playerOption === "paper" && computerOption === "scissors") {
        console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
        return computerWin = true
    } else if(playerOption === "scissors" && computerOption === "paper") {
        console.log("You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption))
        return playerWin = true
    } else if(playerOption === "scissors" && computerOption === "rock") {
        console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
        return computerWin = true
    } else {
        console.log("Tie! Play again!")
        return playerWin = false
    }

}

function game() {
    let playerScore = 0
    let computerScore = 0

    while(playerScore < 5 && computerScore < 5) {
        playRound()
        if(playerWin === true) {
            playerScore++
            playerWin = false
            console.log("Player: " + playerScore + " // Computer: " + computerScore)
        } else if(computerWin === true) {
            computerScore++
            computerWin = false
            console.log("Player: " + playerScore + " // Computer: " + computerScore)
        }
    }

    if(playerScore === 5) {
        return console.log("You Win! " + playerScore + " to " + computerScore)
    } else if(computerScore === 5) {
        return console.log("You Lose! " + computerScore + " to " + computerScore)
    } else {
        return playRound()
    }
}

// game()




