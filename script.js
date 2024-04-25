let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#com-score")

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw! Play again "
    msg.style.backgroundColor = "#081b31"
}

const shoWinner = (userWin, comChoice) => {

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win! computer choose " + comChoice
        msg.style.backgroundColor = "green"
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = "You Loss computer choose  " + comChoice
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userChoice) => {
    const comChoice = genComChoice();

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        shoWinner(userWin, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
        playGame(userChoice);
    })
})