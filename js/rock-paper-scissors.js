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


function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "It's a tie."
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


    for (i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === null) {
            return ''
        };

        console.log(playRound(humanChoice, computerChoice));
        console.log(showScore());
    }

    if (humanScore > computerScore) {
        return "You won the game!"
    } else if (humanScore < computerScore) {
        return "Oh no. You lost the game."
    } else {
        return "The game has ended in a tie!"
    }
}


console.log(playGame());


