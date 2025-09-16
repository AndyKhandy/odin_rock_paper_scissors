const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const para = document.querySelector("#text");
const playerWins = document.querySelector(".playerScore");
const computerWins = document.querySelector(".computerScore");
const resetBtn = document.querySelector("#reset");

let humanScore = 0;
let computerScore = 0;

playGame();

resetBtn.addEventListener("click", reset);



function playGame(){

    rockBtn.addEventListener("click", () => 
        playRound(getComputerChoice(), "rock")
    );

    paperBtn.addEventListener("click", () => 
        playRound(getComputerChoice(), "paper")
    );

    scissorBtn.addEventListener("click", () => 
        playRound(getComputerChoice(), "scissors")
    );

    const divText = document.querySelector(".displayText");

    function playRound(computerChoice, humanChoice)
{
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice)
    {
        para.textContent = "It was a tie no one won!";
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" &&  computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        para.textContent = "Player won! " + humanChoice + " beats " + computerChoice;
    }
    else{
        computerScore++;
        para.textContent = "Computer won! " + computerChoice + " beats " + humanChoice;
    }

    if((humanScore == 5 || computerScore == 5) && (humanScore + computerScore < 10))
    {
        let winner =  humanScore >= computerScore ? "Player" : "Computer";
        para.textContent = "The winner is " + winner + " || Player got " + humanScore + " points || Computer got " + computerScore + " points";
    }
    
    displayScore();
}
}



function displayScore()
{
    playerWins.textContent = humanScore;
    computerWins.textContent = computerScore;
}

function reset()
{
    humanScore = 0;
    computerScore = 0;
    displayScore();
    para.textContent = "Please Press One of the Three";
}



function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * (3)) + 1;
    let choice = "";

    switch(randomNumber)
    {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        default:
            choice = "scissors";
    }

    return choice
}


function getHumanChoice()
{
    let choice = prompt("Enter rock, paper, or scissors!");
    return choice;
}