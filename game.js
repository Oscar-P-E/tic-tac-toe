const Gameboard = (() => {
    const board = [];

    const makeNewBoard = (rows, cols) => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < cols; j++) {
                board[i][j] = 'test';
            };
        };
    };

    const modifyBoard = (row, col, val) => {
        board[row][col] = val;
    };

    const getBoard = () => {
        return board;
    }

    return {
        makeNewBoard,
        modifyBoard,
        getBoard,
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

