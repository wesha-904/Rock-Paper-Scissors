let userScore = 0;
let compScore = 0;

const msg = document.querySelector(".msg-container");
const choice = document.querySelectorAll(".choice");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

choice.forEach((move) => {
    move.addEventListener("click",() =>{
        const userChoice = move.getAttribute("id");
        playGame(userChoice);
    })
})

const genCompChoice = () =>{
    const options = ["Rock","Paper","Scissors"];
    //Math.random()*3; because generated only between 0 to 1 so *3 so number always between 0 to <3
    const ranIdx = Math.floor(Math.random()*3); // Math.floor removes decimal value
    return options[ranIdx];
}


const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();

    if(userChoice == compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Raper"? false:true;
        }else if(userChoice === "Paper") {
            userWin = compChoice === "Scissors"? false:true;
        }else{
            userWin = compChoice === "Rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const drawGame = () =>{
    msg.innerText = "Game was Draw.Play Again?";
    msg.style.backgroundColor = "#b0757c";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = " #9b5d73";
        userScore++;
        userScorepara.innerText = userScore;

    }else{
        msg.innerText = `You lose:( ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = " #c38b8b";
        compScore++;
        compScorepara.innerText = compScore;
       
    }
};