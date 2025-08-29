let computer = getComputerChoice();
let player = getHumanChoice();
player = player.toLowerCase();

let humanScore = 0;
let computerScore = 0;

console.log("Hello World! Computer chose " + computer);
console.log("The player chose " + player);


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