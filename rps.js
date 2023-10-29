function getComputerChoice() {
    const pick = Math.floor((Math.random()*3))
    if (pick == 0) {
        return 'Rock'
    } else if (pick == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

