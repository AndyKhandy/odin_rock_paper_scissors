
playGame();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let computer = "";
    let player = "";

    for(let i = 1; i <= 5; i++)
    {
        computer = getComputerChoice();
        player = getHumanChoice();
        playRound(player, computer, i);
    }

    function playRound(humanChoice, computerChoice, round)
{
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice)
    {
        console.log("It was a tie no one won!");
        alert("It was a tie no one won! Round: " + round + "/5");
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" &&  computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log("Player won! " + humanChoice + " beats " + computerChoice);
        alert("Player won! " + humanChoice + " beats " + computerChoice + " Round: " + round + "/5");
    }
    else{
        computerScore++;
        console.log("Computer won! " + computerChoice + " beats " + humanChoice);
        alert("Computer won! " + computerChoice + " beats " + humanChoice + " Round: " + round + "/5");
    }
}

    let winner =  humanScore >= computerScore ? "Player" : "Computer";
    console.log("The winner is " + winner);
    alert("The winner is " + winner + "|| Player got " + humanScore + " points || Computer got " + computerScore + " points");
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