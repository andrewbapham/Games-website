const status = document.querySelector('.gamestatus')
let gameActive = true;
let currentPlayer = 'X';
let gameState = ["","","","","","","","",""];
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const winnerMessage = () => `Player ${currentPlayer} has won!`
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`
status.innerHTML = currentPlayerTurn();


function cellClick(cellClickEvent){
    const clickedCell = cellClickEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

function cellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    if (currentPlayer === 'X'){
    clickedCell.innerHTML += "<img style=\"width: 96px; height: 96px; margin: none;\" src=\"resources/x.png\">";
    }
    else{
        clickedCell.innerHTML += "<img style=\"width: 96px; height: 96px; margin: none;\" src=\"resources/o.png\">";
    }
}

function resultValidation(){
    let roundWon = false;
    for (let i = 0; i <=7; i++){
        const winCondition = winConditions[i];
        let condA = gameState[winCondition[0]];
        let condB = gameState[winCondition[1]];
        let condC = gameState[winCondition[2]];
        if (condA === '' || condB === '' || condC === ''){
            continue;
        }
        if (condA === condB && condB === condC){
            roundWon = true;
            break;
        }
    }
    if (roundWon){
        status.innerHTML = winnerMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw){
        status.innerHTML = "It's a draw!";
    }

    playerChange();

}

function playerChange(){
    /*
    Basic way
    if (currentPlayer === 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
    }*/

    //With ternary operator
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.innerHTML = currentPlayerTurn();
}

function restartGame(){
    gameActive = true;
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    status.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.gamerestart').addEventListener('click', restartGame);