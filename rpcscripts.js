var result = document.getElementById("result");
var finalImage = document.getElementById("comp-result");
var actionMessage = document.getElementById("action-message");
var randInt = Math.round(Math.random()*2) + 1;
console.log(randInt);

var playerChoice;

var playerScore = 0;
var compScore = 0;

document.getElementById("r").onclick = function() {choice("r")};
document.getElementById("p").onclick = function() {choice("p")};
document.getElementById("s").onclick = function() {choice("s")};

function choice(str){
    if (str == 'r') {
        playerChoice = 1;
    }
    else if (str == 'p'){
        playerChoice = 2;
    }
    else {
        playerChoice = 3;
    }
    console.log(playerChoice);
    
    if(randInt == 1){
        switch(playerChoice){
            case 1:
                result.innerHTML += "It's a tie!";
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/rock.png\">"
                break;
            case 2: 
                result.innerHTML = "Paper covers rock. You win!";
                playerScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/rock.png\">"
                break;
            case 3:
                result.innerHTML = "Rock beats scissors. You lose!";
                compScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/rock.png\">"
                break;
        }
    }
    else if (randInt == 2){
        switch(playerChoice){
            case 1:
                result.innerHTML = "Paper covers rock. You lose!";
                compScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/paper.png\">"
                break;
            case 2: 
                result.innerHTML = "It's a tie!";
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/paper.png\">"
                break;
            case 3:
                result.innerHTML = "Scissors cuts paper. You win!";
                playerScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/paper.png\">"
                break;
        }
    }

    else{
        switch(playerChoice){
            case 1:
                result.innerHTML = "Rock beats scissors. You win!";
                playerScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/scissors.png\">"
                break;
            case 2: 
                result.innerHTML = "Scissors cuts paper. You lose!";
                compScore += 1;
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/scissors.png\">"
                break;
            case 3:
                result.innerHTML = "It's a tie!";
                actionMessage.innerHTML = "The computer chose:";
                finalImage.innerHTML = "<img style=\"margin:auto;\" src=\"resources/scissors.png\">"
                break;
        }
    }
    randInt = Math.round(Math.random()*2) + 1;
    console.log("comp score is :" + compScore);
    document.getElementById("user-score").innerHTML = playerScore;
    document.getElementById("comp-score").innerHTML = compScore;
}

