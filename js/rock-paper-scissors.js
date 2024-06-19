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
            break;
        }

        choice = choice.toLowerCase()
        
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Invalid Choice. Go Again."); 
        };
    }
}


let humanScore = 0, computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(humanScore)
console.log(computerScore)