var choice = ["Rock", "Paper", "Scissors"]

function getPlayerChoice(){
    let playerInput = prompt("Rock, Paper or Scissors? ")
    playerInput = formatInput(playerInput)
    console.log(playerInput)
    let playerChoice = choice.indexOf(playerInput)
    while (playerChoice == -1){
        playerInput = prompt("Invalid Choice, try again: Rock, Paper or Scissors? ")
        playerInput = formatInput(playerInput)
        playerChoice = choice.indexOf(playerInput)
    }
    
    console.log("You chose " + playerInput)
    return playerChoice
}

function formatInput(playerInput){
    playerInput = playerInput.toLowerCase()
    playerInput = playerInput.replace(playerInput[0], playerInput[0].toUpperCase())
    return playerInput
}

function getComputerChoice(){
    // Will return a random integer from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);
    console.log("Computer chose " + choice[computerChoice])

    return computerChoice   
}

function playRound(playerChoice){
   
    let computerChoice = getComputerChoice()
    
    let winner = undefined
    let result = undefined
    
    if (playerChoice == computerChoice){
        result = "Draw. Both chose " + choice[playerChoice] + "." 
    }
    else if (playerChoice == (computerChoice+1)%3){
        result = "You Win! " + choice[playerChoice] + " beats " + choice[computerChoice] + "!"
        winner = "Player"
    }
    else{
        result = "You Lose... " + choice[computerChoice] + " beats " + choice[playerChoice] + "..."
        winner = "Computer"
    }
    console.log(result)
    console.log(" ")

    return winner
}

function game(){
    let playerWins = 0
    let computerWins = 0

    while (playerWins < 2 && computerWins < 2){
        winner = playRound()

        if (winner == "Player") playerWins++
        else if (winner == "Computer") computerWins++

        console.log("You wins: " + playerWins + ". Computer wins: " + computerWins + ".")
    }

    console.log(playerWins >= 2 ? "Congratulations, you win!" : "Unlucky, you lost.")
}


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => {
    playRound(0);
});

btnPaper.addEventListener('click', () => {
    playRound(1);
});

btnScissors.addEventListener('click', () => {
    playRound(2);
});