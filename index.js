import { Gameboard, Player } from './game.js';

const main = document.getElementById('main');

// a "table" made of divs because it's easier to manage
const createDivsTable = () => {
    const gameTable = document.createElement('div');
    gameTable.classList.add('game-table');

    Gameboard.makeNewBoard(3, 3);

    const board = Gameboard.getBoard();
    const rows = board.length;
    const cols = board[0].length;

    gameTable.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gameTable.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const gameCell = document.createElement('div');
            gameCell.classList.add('game-cell');
            gameCell.textContent = board[row][col];
            gameCell.addEventListener('click', () => {
                Gameboard.modifyBoard(row, col, currentPlayer.sign);
                gameCell.textContent = Gameboard.getBoard()[row][col];
                switchPlayer();
            });
    gameTable.appendChild(gameCell);
        }
    }

main.appendChild(gameTable);
};


const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

let currentPlayer = player1;

const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

createDivsTable();

