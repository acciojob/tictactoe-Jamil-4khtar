//your JS code here. If required.

const startGame = document.getElementById("submit");
const container = document.querySelector(".container");
const gameContainer = document.querySelector(".game-container");
const playerOne = document.getElementById("player1");
const playerTwo = document.getElementById("player2");
const message = document.querySelector(".message");
let currPlayer;
let winner;

startGame.addEventListener("click", (e) => {
    e.preventDefault();
    if (playerOne.value !== "" && playerTwo.value !== "") {
        container.style.display = "none"
        gameContainer.style.display = "block"
        message.innerHTML = `${playerOne.value}, you're up`
        currPlayer = playerOne.value;
    } else {
        setTimeout(() => {
            alert("Player Names required")
        }, 500);
    }
})

let cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("click", playGame);
});

function playGame(e) {
    if (currPlayer === playerOne.value) {
        if (e.target.innerHTML === "") {
            e.target.innerHTML = "X";
        } else {
            e.target.innerHTML = "";
        }
        winner = currPlayer
        currPlayer = playerTwo.value;
        message.innerHTML = `${currPlayer}, you're up`;
        checkWin()
    }
    else if (currPlayer === playerTwo.value) {
        if (e.target.innerHTML === "") {
            e.target.innerHTML = "O";
        } else {
            e.target.innerHTML = "";
        }
        winner = currPlayer
        currPlayer = playerOne.value;
        message.innerHTML = `${currPlayer}, you're up`;
        checkWin()
    }
}


function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winningCombinations.forEach(combination => {
        if (cells[combination[0]].innerHTML === cells[combination[1]].innerHTML &&
        cells[combination[1]].innerHTML === cells[combination[2]].innerHTML &&
        cells[combination[0]].innerHTML !== "") {
            cells[combination[0]].classList.add("won")
            cells[combination[1]].classList.add("won")
            cells[combination[2]].classList.add("won")
            message.innerHTML = `${winner}, congratulations you won!`
            /* setTimeout(() => {
                cells.forEach(c => {
                    c.innerHTML = ""
                    cells[combination[0]].classList.remove("won")
                    cells[combination[1]].classList.remove("won")
                    cells[combination[2]].classList.remove("won")
                })
            }, 500); */
        }
    });
}