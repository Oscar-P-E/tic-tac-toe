const ROWS = 3;
const COLS = 3;

const drawBoard = (rows, cols) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = '';
        }
    }
    return board;
}

console.table(drawBoard(ROWS, COLS));
