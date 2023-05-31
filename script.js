const ROWS = 3;
const COLS = 3;

const board = [[]];

for (let i = 0; i < ROWS; ++i) {
  for (let j = 0; j < COLS; ++j) {
    board[j] = 1;
  }
    board[i] = 2;
}

console.log(board);
