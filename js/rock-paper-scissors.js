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

console.log(getComputerChoice());