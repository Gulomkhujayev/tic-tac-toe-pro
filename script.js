const squares = document.querySelectorAll('.square');
const restart = document.querySelector('.restart');
const winnerElm = document.querySelector('.win');
const nextPlayer = document.querySelector('.nextPlayer');
const positions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const board = new Array(9).fill(NaN);
const lists = document.querySelectorAll('.li');
let array = [];
let winnerExist = false;
let currentPlayer = "X";


function checkWinner() {
    for (let position of positions) {
        const [x, y, z] = position;
        if (board[x] === board[y] && board[y] === board[z]) return true;
    }
}

const square = squares.forEach((square,idx) => {
    square.addEventListener('click', (e) => {
        const value = square.innerText;
        if(!winnerExist && !value){
            board[idx] = currentPlayer;
            square.innerText = currentPlayer;
            winnerExist = checkWinner();
            if(winnerExist){
                winnerElm.innerText =  `Winner: ${currentPlayer}`;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
        nextPlayer.innerText = `Next Player: ${currentPlayer}`;
        lists.forEach((li,idx) => {
            // let btn = li.createElement("button");
            // btn.innerText = `${currentPlayer}`
            li[idx].innerText = `game to move ${$}`
        })
    })
    restart.addEventListener('click', (e) => {
        currentPlayer = "X";
        square.innerText = '';
        winnerElm.innerText =  `Winner: `;
        nextPlayer.innerText = `Next Player: X`;
    })
})
