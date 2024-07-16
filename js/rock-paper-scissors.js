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
        return (`You won the round! ${humanChoice} beats ${computerChoice}.`)
    } else {
        computerScore += 1;
        return (`You lost the round! ${computerChoice} beats ${humanChoice}.`)
    }; 
 }


function showScore() {
    return `YOU: ${humanScore} COMPUTER: ${computerScore}`;
 }


 function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
    });
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

        if (humanScore == 5 ) {
            disableButtons(buttons);
            divRound.textContent = `You WON the game!!! ${button.id} beats ${computerChoice}.`;
        } else if (computerScore == 5) {
            disableButtons(buttons);
            divRound.textContent = `You LOST the game!!! ${computerChoice} beats ${button.id}.`;
        }
    })
});



