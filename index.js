import { Gameboard, GameController } from "./game.js";

const main = document.getElementById("main");

// a "table" made of divs because it's easier to manage than a table
const drawDivsTable = () => {
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
                let outcome = GameController.checkForWinner();
                outcome && endGameDisplay(outcome);
            });
            gameTable.appendChild(gameCell);
        }
    }

    main.prepend(gameTable);
};

const drawDisplay = () => {
    const nameArea = document.createElement("div");
    const p1Display = document.createElement("div");
    const p2Display = document.createElement("div");
    nameArea.classList.add("name_area");
    p1Display.classList.add("p1_name");
    p2Display.classList.add("p2_name");

    p1Display.textContent = `${GameController.player1.name} = ${GameController.player1.sign}`;
    p2Display.textContent = `${GameController.player2.name} = ${GameController.player2.sign}`;

    main.appendChild(nameArea);
    nameArea.appendChild(p1Display);
    nameArea.appendChild(p2Display);
};

const drawButtons = () => {
    const btns_area = document.createElement("div");
    const renameP1Btn = document.createElement("button");
    const renameP2Btn = document.createElement("button");
    const startRestartBtn = document.createElement("button");
    btns_area.classList.add("btns_area");
    renameP1Btn.classList.add("rename_p1_btn");
    renameP2Btn.classList.add("rename_p2_btn");
    startRestartBtn.classList.add("start_restart_btn");
    renameP1Btn.textContent = "Change P1 name";
    renameP2Btn.textContent = "Change P2 name";
    startRestartBtn.textContent = "Start Game";

    renameP1Btn.addEventListener("click", () => {
        const p1Display = document.querySelector(".p1_name");
        const input = prompt("Enter Player 1 name:");
        if (input !== "") {
            GameController.renamePlayer(GameController.player1, input);
            p1Display.textContent = `${GameController.player1.name} = ${GameController.player1.sign}`;
        }
    });

    renameP2Btn.addEventListener("click", () => {
        const p2Display = document.querySelector(".p2_name");
        const input = prompt("Enter Player 2 name:");
        if (input !== "") {
            GameController.renamePlayer(GameController.player2, input);
            p2Display.textContent = `${GameController.player2.name} = ${GameController.player2.sign}`;
        }
    });

    main.appendChild(btns_area);
    btns_area.appendChild(renameP1Btn);
    btns_area.appendChild(startRestartBtn);
    btns_area.appendChild(renameP2Btn);

    startRestartBtn.addEventListener("click", () => {
        const gameTable = document.querySelector(".game-table");
        if (gameTable) {
            gameTable.remove();
            drawDivsTable();
        } else {
            startRestartBtn.innerText = "Reset Game";
            drawDivsTable();
        }
    });
};

const endGameDisplay = (outcome) => {
    const gameCells = document.querySelectorAll(".game-cell");
    for (let cell of gameCells) {
        cell.style.fontSize = "1rem";
        const span = document.createElement("span");
        span.classList.add("blink");
        span.textContent = outcome;
        cell.innerHTML = "";
        cell.appendChild(span);
    }
};

drawDisplay();
drawButtons();
