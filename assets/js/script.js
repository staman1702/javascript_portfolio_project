const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const btns = document.getElementsByClassName("control");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 5);

    var responses = document.getElementsByClassName("response");
    var currentResponse = document.getElementsByClassName("response active");
    if (currentResponse.length > 0) {
        currentResponse[0].className = currentResponse[0].className.replace(" active", "");
    }
    responses[computerChoice].className += " active";

    //let result = checkWinner(choices[computerChoice], choices[playerChoice]);//
    let result = checkWinner(computerChoice, playerChoice);

    updateScore(result);
}

/**
 * Gets the playerChoice and the computerChoice
 * and returns the winner.
 */
function checkWinner(computerChoice, playerChoice) {

    //let player = choices[playerChoice];//
    //let computer = choices[computerChoice];//
    let player = parseInt(playerChoice);
    let computer = parseInt(computerChoice);


    if (player > computer) {
        document.getElementById("messages").innerText = "You have won this round!";
        return "win";

    }

    else if (player === computer) {
        document.getElementById("messages").innerText = "It's a tie.";
        return "tie";
    }

    else {
        document.getElementById("messages").innerText = "You have lost this round :(";
        return "loss";
    }



}


function updateScore(result) {

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    let outcome = result;

    if (outcome === "win") {
        document.getElementById("player-score").innerText = ++playerScore;
    }

    else if (outcome === "loss") {
        document.getElementById("computer-score").innerText = ++computerScore;
    }

    else {

    };
}
