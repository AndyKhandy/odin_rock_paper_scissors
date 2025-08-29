let computer = getComputerChoice();
console.log("Hello World! Computer chose" + computer);


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
