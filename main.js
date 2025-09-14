const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

playGame();


function playGame(){
    let humanScore = 0;
    let computerScore = 0;


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
    const para = document.createElement("p");

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

    if(humanScore == 5 || computerScore == 5)
    {
        let winner =  humanScore >= computerScore ? "Player" : "Computer";
        para.textContent += "The winner is " + winner + "|| Player got " + humanScore + " points || Computer got " + computerScore + " points";
    }

    div.appendChild(para);
}

    
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