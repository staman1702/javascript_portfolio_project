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
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScore(result);
}

/**
 * Gets the playerChoice and the computerChoice
 * and returns the winner.
 */
function checkWinner() {

    let player = choices[playerChoice];
    let computer = choices[computerChoice];

    if (player === computer) {
        return "Tie";
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            
            return 

        } else if ( computer == 'scissors'){
            
        } else if (computer == 'lizard'){

        } else {

        }
    }

    else if (player == 'paper') {
        if (computer == 'rock') {

            return;

        } else if (computer == 'scissors') {

        } else if (computer == 'lizard') {

        } else {

        }
    }

}


function updateScore(result) {

}
