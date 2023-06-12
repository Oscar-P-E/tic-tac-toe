import { Gameboard, GameController } from "./game.js";

const main = document.getElementById("main");

// a "table" made of divs because it's easier to manage
const createDivsTable = () => {
    const gameTable = document.createElement("div");
    gameTable.classList.add("game-table");

    Gameboard.makeNewBoard(3, 3);

    const board = Gameboard.getBoard();
    const rows = board.length;
    const cols = board[0].length;

    gameTable.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gameTable.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const gameCell = document.createElement("div");
            gameCell.classList.add("game-cell");
            gameCell.textContent = board[row][col];
            gameCell.addEventListener("click", () => {
                GameController.makeMove(row, col);
                gameCell.textContent = Gameboard.getBoard()[row][col];
            });
            gameTable.appendChild(gameCell);
        }
    }

    main.appendChild(gameTable);
};

createDivsTable();
