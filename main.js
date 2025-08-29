const computer = getComputerChoice();
const player = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

console.log("Hello World! Computer chose " + computer);
console.log("The player chose " + player);
playRound(player,computer);

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice)
    {
        console.log("It was a tie no one won!");
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" &&  computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log("Player won!");
    }
    else{
        computerScore++;
        console.log("Computer won!");
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