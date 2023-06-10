const Gameboard = (() => {
    const board = [];

    const makeNewBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < cols; j++) {
                board[i][j] = '';
            }
        }
    };

    const modifyBoard = (row, col, val) => {
        if (board[row][col] === '') {
            board[row][col] = val;
        }
    }

    const getBoard = () => {
        return board;
    }

    const checkForWinner = (player1, player2) => {
    const board = Gameboard.getBoard();
    const size = board.length;

    // Helper function to check if all values in an array are equal and not empty
    const allEqual = arr => arr.every(val => val && val === arr[0]);

    // check rows
    for (let i = 0; i < size; i++) {
        if (allEqual(board[i])) {
            return board[i][0] === player1.sign ? player1 : player2;
        }
    }

    // check columns
    for (let i = 0; i < size; i++) {
        let col = board.map(row => row[i]);
        if (allEqual(col)) {
            return col[0] === player1.sign ? player1 : player2;
        }
    }

    // check main diagonal (top left to bottom right)
    let mainDiag = board.map((row, idx) => row[idx]);
    if (allEqual(mainDiag)) {
        return mainDiag[0] === player1.sign ? player1 : player2;
    }

    // check secondary diagonal (top right to bottom left)
    let secondaryDiag = board.map((row, idx) => row[size - idx - 1]);
    if (allEqual(secondaryDiag)) {
        return secondaryDiag[0] === player1.sign ? player1 : player2;
    }

    // no winner yet
    // if all cells are filled, it's a draw
    let isDraw = board.every(row => row.every(cell => cell !== ''));

    if (isDraw) {
        return 'draw';
    }

    // game is still ongoing
    return null;
};

    return {
        makeNewBoard,
        modifyBoard,
        getBoard,
        checkForWinner,
    };
})();

const Player = (name, sign) => {
    return { name, sign };
};

export { Gameboard, Player };

// // test
// const player1 = Player('P1', 'X');
// const player2 = Player('P2', 'O');

// Gameboard.makeNewBoard();

// console.log('Initial board state');
// console.table(Gameboard.getBoard());

// Gameboard.modifyBoard(0, 1, player1.sign);

// console.log('Change top middle cell to X');
// console.table(Gameboard.getBoard());

// Gameboard.modifyBoard(1, 1, player2.sign);

// console.log('Change middle cell to O');
// console.table(Gameboard.getBoard());

// Gameboard.makeNewBoard();

// console.log('Board cleared to initial board state again');
// console.table(Gameboard.getBoard());

// Gameboard.modifyBoard(0, 2, player1.sign);

// console.log('Change top right cell to X');
// console.table(Gameboard.getBoard());

