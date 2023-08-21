const choices = ["rock", "paper", "scissors", "lizard", "spock"];
var btns = document.getElementsByClassName("control");
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
    let result = checkWinner(choice[computerChoice], choice[playerChoice]);

    updateScore(result);
}

/**
 * Gets the playerChoice and the computerChoice
 * directly from the dom, and returns the winner.
 */
function checkWinner() {



}


function updateScore(result) {

}
