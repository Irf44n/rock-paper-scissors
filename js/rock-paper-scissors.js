function getComputerChoice() {
    let number = Math.random()*30;
    if (number < 10) {
        return "rock"
    } else if (number < 20) {
        return "paper"
    } else {
        return "scissors"
    };
}


function getHumanChoice() {
    while (true) {
        let choice = prompt("Choose rock, paper or scissors.");

        if (choice === null) {
            alert("Prompt canceled. Exiting...");
            return null;
        }

        choice = choice.toLowerCase()

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Invalid Choice. Go Again."); 
        };
    }
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === null) {
        return 0
    }


    if (humanChoice == computerChoice) {
        return "It's a tie."
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        return (`You WON!!! ${humanChoice} beats ${computerChoice}`)
    } else {
        return (`You LOST!!! ${computerChoice} beats ${humanChoice}`)
    }
}


let humanScore = 0, computerScore = 0;
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
console.log(playRound(humanChoice, computerChoice))
