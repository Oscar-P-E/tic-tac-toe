import { Gameboard, Player } from './game.js';

const main = document.getElementById('main');

const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('game-table');

    Gameboard.makeNewBoard(3, 3);

    const board = Gameboard.getBoard();
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        const tableRow = document.createElement('tr');
        tableRow.classList.add('game-row');
        table.appendChild(tableRow);
        for (let j = 0; j < cols; j++) {
            const tableCell = document.createElement('td');
            tableCell.classList.add('game-cell');
            tableCell.textContent = board[i][j];
            tableRow.appendChild(tableCell);
        };
    };

    main.appendChild(table);
};

createTable();
