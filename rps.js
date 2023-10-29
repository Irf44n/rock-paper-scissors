// Function for computer choice
// Prompt for player choice and store in a variable
// Function to compare these two parameters and decide round winner
// Function to play game for 5 rounds, include previous function 5 times and decide game winner


function getComputerChoice() {
    let num = Math.floor((Math.random()*3));
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return 'It is a draw.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats scissors.';
    } else {
        return 'Invalid input. Please try again.'
    }
}


let playerSelection = prompt('Choose your weapon: Rock, Paper or Scissors.');
playerSelection = playerSelection.toLowerCase();

computerSelection = getComputerChoice();

result = playRound(computerSelection, playerSelection);
console.log(result);

