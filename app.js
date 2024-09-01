let playerSelection
let computerSelection
let playerWin = false
let computerWin = false
let playerScore = 0
let computerScore = 0
let computerDisplay = document.getElementById("computerChoice")
let computerThrow = document.createElement("h2")
let resultsArea = document.getElementById("resultsArea")
let resultsText = document.createElement("h2")
let rockChoice = document.getElementById("rockBtn")
let paperChoice = document.getElementById("paperBtn")
let scissorsChoice = document.getElementById("scissorsBtn")
let gameBoard = document.getElementById("gameBoard")
let gameScore = document.createElement("h1")
let finalResult = document.createElement("h1")
let playerScoreDisplay = document.querySelector(".playerScore")
let computerScoreDisplay = document.querySelector(".computerScore")

rockChoice.addEventListener("click", () => {
    playerSelection = "rock"
    computerSelection = ""
    game(playRound());
});
paperChoice.addEventListener("click", () => {
    playerSelection = "paper"
    computerSelection = ""
    game(playRound());
});
scissorsChoice.addEventListener("click", () => {
    playerSelection = "scissors"
    computerSelection = ""
    game(playRound());
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
    playerWin = false
    return playerSelection
}

function getComputerChoice() {
    let options = [1, 2, 3]
    let choice = options[Math.floor(Math.random() * options.length)]
    computerWin = false
    computerThrow.textContent = ""
    if(choice === 1) {
        return "Rock"
    } else if(choice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function resetChoices() {
    playerSelection = ""
}

function winText(player, computer) {   
    let playerOption = player.toLowerCase();
    let computerOption = computer.toLowerCase()
    if (resultsText.textContent === "") {
        resultsText.textContent = "You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption);
        resultsArea.appendChild(resultsText);
    } else {
        resultsText.textContent = "You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption);
    }
}

function loseText(player, computer) {
    let playerOption = player.toLowerCase();
    let computerOption = computer.toLowerCase()
    if (resultsText.textContent === "") {
        resultsText.textContent = "You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption);
        resultsArea.appendChild(resultsText);
    } else {
        resultsText.textContent = "You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption);
    }
}

function tieText() {
    if (resultsText.textContent === "") {
        resultsText.textContent = "Tie! Play again!";
        resultsArea.appendChild(resultsText);
    } else {
        resultsText.textContent = "Tie! Play again!";
    }
}

function playRound() {
    computerSelection = getComputerChoice()
    computerThrow.textContent = computerSelection
    computerDisplay.appendChild(computerThrow)
    let playerOption = playerSelection.toLowerCase()
    let computerOption = computerSelection.toLowerCase()
    
    if(playerOption === "rock" && computerOption === "scissors") {
        winText(playerOption, computerOption)
        resetChoices()
        return playerWin = true
    } else if(playerOption === "rock" && computerOption === "paper") {
        loseText(playerOption, computerOption)
        resetChoices()
        return computerWin = true
    } else if(playerOption === "paper" && computerOption === "rock") {
        winText(playerOption, computerOption)
        resetChoices()
        return playerWin = true
    } else if(playerOption === "paper" && computerOption === "scissors") {
        loseText(playerOption, computerOption)
        resetChoices()
        return computerWin = true
    } else if(playerOption === "scissors" && computerOption === "paper") {
        winText(playerOption, computerOption)
        resetChoices()
        return playerWin = true
    } else if(playerOption === "scissors" && computerOption === "rock") {
        loseText(playerOption, computerOption)
        resetChoices()
        return computerWin = true
    } else {
        tieText()
        resetChoices()
        return playerWin = false
    }

}

function game(lastResult) {
    while(playerScore < 5 && computerScore < 5) {
        if(playerWin === true) {
            playerScore++
            playerScoreDisplay.innerHTML = playerScore.toString()
            playerWin = false
            break
        } else if(computerWin === true) {
            computerScore++
            computerScoreDisplay.innerText = computerScore.toString()
            computerWin = false
            break
        }
        else {
            break
        }
    }

    if(playerScore === 5) {
        finalResult.textContent = "You Win! " + playerScore + " to " + computerScore
        gameBoard.textContent = ""
        gameBoard.appendChild(finalResult)
    } else if(computerScore === 5) {
        finalResult.textContent = "You Lose! " + playerScore + " to " + computerScore
        gameBoard.textContent = ""
        gameBoard.appendChild(finalResult)
    } else {
        return console.log("First to 5 wins!")
    }
}




