let userScore = 0;
let comScore = 0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#com-score");
let resetBtn=document.querySelector("#reset-btn");
const msgContainer=document.querySelector(".msg-container")

//Logic start from here
const playGame = (userChoice) => {
    //Generate computer choice!
    const compChoice=getCompChoice();
    if(userChoice===compChoice){
        //Draw game
        draGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const getCompChoice = () => {
    //rock, paper, scissor
    const options=["rock", "paper", "scissor"];
    const ranInd=Math.floor(Math.random()*3);
    return options[ranInd];
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        //console.log("Choice was clicked!",userChoice);
        playGame(userChoice);

    })
});
const enableGameChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = 'auto'; // Ensure choices are clickable
    });
};
const draGame = () => {
    msg.innerHTML="Game was draw! Play again.";
    msg.style.backgroundColor="#081b31";
    msg.style.color="white";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Wins! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
        msg.style.color="white";

    }else{
        comScore++;
        compScorePara.innerText=comScore;
        msg.innerText=`You Loss! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};
// reset game here
const resetGame = () => {
    userScore = 0;
    comScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = comScore;
    msg.innerText = "Play Your Move!";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
    enableGameChoices();

};
resetBtn.addEventListener("click",resetGame);