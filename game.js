const Gameboard = (() => {
    const board = [];

    const makeNewBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < cols; j++) {
                board[i][j] = "";
            }
        }
    };

    const modifyBoard = (row, col, val) => {
        if (board[row][col] !== "") {
            return "unchanged";
        }
        board[row][col] = val;
        return "changed";
    };

    const getBoard = () => {
        return board;
    };

    return {
        makeNewBoard,
        modifyBoard,
        getBoard,
    };
})();

const Player = (name, sign) => {
    return { name, sign };
};

const GameController = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const checkForWinner = () => {
        const board = Gameboard.getBoard();
        const size = board.length;

        // Helper function to check if all values in an array are equal and not empty
        const allEqual = (arr) => arr.every((val) => val && val === arr[0]);

        // check rows
        for (let i = 0; i < size; i++) {
            if (allEqual(board[i])) {
                return board[i][0] === player1.sign
                    ? player1.name
                    : player2.name;
            }
        }

        // check columns
        for (let i = 0; i < size; i++) {
            let col = board.map((row) => row[i]);
            if (allEqual(col)) {
                return col[0] === player1.sign ? player1.name : player2.name;
            }
        }

        // check main diagonal (top left to bottom right)
        let mainDiag = board.map((row, idx) => row[idx]);
        if (allEqual(mainDiag)) {
            return mainDiag[0] === player1.sign ? player1.name : player2.name;
        }

        // check secondary diagonal (top right to bottom left)
        let secondaryDiag = board.map((row, idx) => row[size - idx - 1]);
        if (allEqual(secondaryDiag)) {
            return secondaryDiag[0] === player1.sign
                ? player1.name
                : player2.name;
        }

        // no winner yet
        // if all cells are filled, it's a draw
        let isDraw = board.every((row) => row.every((cell) => cell !== ""));

        if (isDraw) {
            return "draw";
        }

        // game is still ongoing
        return null;
    };

    const renamePlayer = (player, name) => {
        if (player !== player1 && player !== player2) {
            throw new Error(
                "Invalid player! Player should be either player1 or player2."
            );
        }
        player.name = name;
    };

    const makeMove = (row, col) => {
        if (
            Gameboard.modifyBoard(row, col, currentPlayer.sign) === "unchanged"
        ) {
            return;
        }
        console.log(checkForWinner());
        switchPlayer();
    };

    return {
        makeMove,
        renamePlayer,
    };
})();

export { Gameboard, GameController };
