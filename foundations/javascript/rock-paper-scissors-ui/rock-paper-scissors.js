var choice = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;
let gameWinner = false;

function formatInput(playerInput){
    playerInput = playerInput.toLowerCase()
    playerInput = playerInput.replace(playerInput[0], playerInput[0].toUpperCase())
    return playerInput
}

function getComputerChoice(){
    // Will return a random integer from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);

    return computerChoice   
}


const yourScore = document.querySelector("#your-score");
const computerScore = document.querySelector('#computer-score');
const winnerDiv = document.querySelector(".winner");
const resultDiv = document.querySelector(".result");
let winnerText = null;
let btnRestart = null;
let playerChoiceText = null;
let computerChoiceText = null;
let resultText = null;

function playRound(playerChoice){

    
    if (gameWinner) return; /* Don't progress if there is a winner in place*/
    
    
    let computerChoice = getComputerChoice();
    let result = "";
    
    if (playerChoice == computerChoice){
        result = "Draw. Both chose " + choice[playerChoice] + ".";
    }
    else if (playerChoice == (computerChoice+1)%3){
        result = "You Win! " + choice[playerChoice] + " beats " + choice[computerChoice] + "!";
        playerWins++;
    }
    else{
        result = "You Lose, " + choice[computerChoice] + " beats " + choice[playerChoice] + "...";
        computerWins++;    
    }

    //Remove previous instances
    if (playerChoiceText != null){
        playerChoiceText.remove();
        computerChoiceText.remove();
        resultText.remove();
    }

    // Define new texts
    playerChoiceText = document.createElement('h3');
    playerChoiceText.textContent = "You chose " + choice[playerChoice];
    resultDiv.appendChild(playerChoiceText);

    computerChoiceText = document.createElement('h3');
    computerChoiceText.textContent = "Computer chose " + choice[computerChoice];
    resultDiv.appendChild(computerChoiceText);
    
    resultText = document.createElement('h3');
    resultText.textContent = result;
    resultDiv.appendChild(resultText);

    yourScore.textContent = "Your Score: " + playerWins + ".";
    computerScore.textContent = "Computer Score: " + computerWins + ".";
    
    if ((playerWins > 2 || computerWins > 2) && !gameWinner){
        gameWinner = true;

        //Display winner
        winnerText = document.createElement('h2');
        winnerText.textContent = playerWins >= 2 ? "Congratulations, you win!" : "Unlucky, you lost.";
        winnerText.setAttribute("id", 'winnerText');
        winnerDiv.appendChild(winnerText);

        //Create Restart Button
        btnRestart = document.createElement('button');
        btnRestart.textContent = "Restart";
        btnRestart.setAttribute("id", 'restart');

        btnRestart.addEventListener('click', () => {
            restartGame();
        });
        winnerDiv.appendChild(btnRestart);
    }

    return;
}

function restartGame(){
    playerWins = 0;
    computerWins = 0;
    gameWinner = false;

    winnerText.remove();
    btnRestart.remove();
    computerChoiceText.remove();
    playerChoiceText.remove();
    resultText.remove();

    yourScore.textContent = "Your Score: " + playerWins;
    computerScore.textContent = "Computer Score: " + computerWins;
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