// game-area section variable
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const btns = document.getElementsByClassName("control");

// score-area section variable
const newGame = document.getElementById("NewGame");

// event listener for player's choices
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

// event listener for new game
newGame.addEventListener('click', function () {

    let message = document.getElementById("messages");
    message.innerText = "Start the game by making your choice. First one to reach 5 points wins.";
    newGame.innerHTML = "Click to start New Game";

    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;

    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
    }

});


/**
 * Gets the playerChoice from event listener, generates computerChoice
 * and returns the result from checkWinner function
 * @param {number} playerChoice 
 * @returns {string} result
 */
function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 5);

    var responses = document.getElementsByClassName("response");
    var currentResponse = document.getElementsByClassName("response active");
    if (currentResponse.length > 0) {
        currentResponse[0].className = currentResponse[0].className.replace(" active", "");
    }
    responses[computerChoice].className += " active";

    let result = checkWinner(computerChoice, playerChoice);

    updateScore(result);
}

/**
 * Gets the playerChoice and the computerChoice
 * and returns the win/loss and corresponding message
 * @param {number} computerChoice 
 * @param {number} playerChoice 
 * @returns {string}
 */
function checkWinner(computerChoice, playerChoice) {

    let player = choices[playerChoice];
    let computer = choices[computerChoice];
    let message = document.getElementById("messages");

    if (player === computer) {
        message.innerText = "It's a tie. Play the next round!";
        return "tie";
    } else if (player === "rock") {
        if (computer === "paper") {
            message.innerText = "Paper covers rock. You lose this round...";
            return "loss";
        } else if (computer === "scissors") {
            message.innerText = "Rock crushes scissors. You win this round!";
            return "win";
        } else if (computer === "lizard") {
            message.innerText = "Rock crushes lizard. You win this round!";
            return "win";
        } else {
            message.innerText = "Spock evaporates rock. You lose this round...";
            return "loss";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            message.innerText = "Paper covers rock. You win this round!";
            return "win";
        } else if (computer === "scissors") {
            message.innerText = "Scissors cut paper. You lose this round...";
            return "loss";
        } else if (computer === "lizard") {
            message.innerText = "Lizard eats paper. You lose this round...";
            return "loss";
        } else {
            message.innerText = "Paper disproves spock. You win this round!";
            return "win";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            message.innerText = "Rock crushes scissors. You lose this round...";
            return "loss";
        } else if (computer === "paper") {
            message.innerText = "Scissors cut paper. You win this round!";
            return "win";
        } else if (computer === "lizard") {
            message.innerText = "Scissors decapitate lizard. You win this round!";
            return "win";
        } else {
            message.innerText = "Spock smashes scissors. You lose this round...";
            return "loss";
        }
    } else if (player === "lizard") {
        if (computer === "rock") {
            message.innerText = "Rock crushes lizard. You lose this round...";
            return "loss";
        } else if (computer === "paper") {
            message.innerText = "Lizard eats paper. You win this round!";
            return "win";
        } else if (computer === "scissors") {
            message.innerText = "Scissors decapitate lizard. You lose this round...";
            return "loss";
        } else {
            message.innerText = "Lizard poisons Spock. You win this round!";
            return "win";
        }
    }

    // player === "spock"
    else {
        if (computer === "rock") {
            message.innerText = "Spock evaporates rock. You win this round!";
            return "win";
        } else if (computer === "paper") {
            message.innerText = "Paper disproves spock. You lose this round...";
            return "loss";
        } else if (computer === "scissors") {
            message.innerText = "Spock smashes scissors. You win this round!";
            return "win";
        } else {
            message.innerText = "Lizard poisons Spock. You lose this round...";
            return "loss";
        }
    }
}


/**
 * Gets the result
 * and increments the score, stopping it once one side gets to 5
 * @param {string} result 
 */

function updateScore(result) {

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    let outcome = result;

    if (outcome === "win") {
        document.getElementById("player-score").innerText = ++playerScore;
    } else if (outcome === "loss") {
        document.getElementById("computer-score").innerText = ++computerScore;
    } else {

    };

    if (computerScore == 5 || playerScore == 5) {
        for (var i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
        }

        if (computerScore == 5) {
            newGame.innerHTML = "Computer won the Game. Click to start New Game";
        } else {
            newGame.innerHTML = "You won the Game. Click to start New Game";
        }
    }
}