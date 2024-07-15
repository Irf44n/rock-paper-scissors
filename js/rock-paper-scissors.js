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


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return (`You chose ${humanChoice}. It's a tie.`)
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return (`You WON!!! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore += 1;
        return (`You LOST!!! ${computerChoice} beats ${humanChoice}`)
    }; 
 }


function showScore() {
    return `YOU: ${humanScore} COMPUTER: ${computerScore}`;
 }


let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
const divRound = document.querySelector("#round");
const divScore = document.querySelector("#score");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        divRound.textContent = playRound(button.id, computerChoice);
        divScore.textContent = showScore();
    })
});



