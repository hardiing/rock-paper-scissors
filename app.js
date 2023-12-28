let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()

function capitalize(string) {
    string = string.split("")
    for(let i = 0; i < string.length; i++) {
        string[i] = (i === 0 ? string[i].toUpperCase() : string[i].toLowerCase())
    }
    return string.join("")
}

function getPlayerChoice() {
    let playerSelection = prompt("Select rock, paper, or scissors")
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

function playRound(playerSelection, computerSelection) {
    let playerOption = playerSelection.toLowerCase()
    let computerOption = computerSelection.toLowerCase()
    
    if(playerOption === "rock" && computerOption === "scissors") {
        return console.log("You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption))
    } else if(playerOption === "rock" && computerOption === "paper") {
        return console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
    } else if(playerOption === "paper" && computerOption === "rock") {
        return console.log("You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption))
    } else if(playerOption === "paper" && computerOption === "scissors") {
        return console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
    } else if(playerOption === "scissors" && computerOption === "paper") {
        return console.log("You Win! " + capitalize(playerOption) + " beats " + capitalize(computerOption))
    } else if(playerOption === "scissors" && computerOption === "rock") {
        return console.log("You Lose! " + capitalize(computerOption) + " beats " + capitalize(playerOption))
    } else {
        console.log("Tie! Play again!")
        let playerSelection = getPlayerChoice()
        let computerSelection = getComputerChoice()
        return playRound(playerSelection, computerSelection)
    }

}

playRound(playerSelection, computerSelection)
