const ROWS = 3;
const COLS = 3;

const board = [];

for (let i = 0, n = 1; i < ROWS; i++) {
    board[i] = [];
    for (let j = 0; j < COLS; j++) {
        board[i][j] = n++;
    }
}
