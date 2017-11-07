const solve = require('../lib').default;

const input = [
  0, 0, 0,  0, 0, 0,  0, 0, 2,
  0, 0, 0,  6, 0, 0,  7, 0, 0,
  0, 0, 0,  0, 0, 8,  5, 1, 3,

  8, 0, 9,  7, 0, 0,  0, 0, 0,
  0, 0, 7,  0, 0, 0,  0, 5, 0,
  0, 4, 1,  0, 0, 0,  3, 9, 0,

  0, 9, 0,  0, 2, 1,  0, 0, 8,
  0, 3, 0,  5, 0, 0,  0, 4, 0,
  0, 1, 0,  0, 7, 6,  0, 0, 0
];

// // this also works!
// const input = [
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
//   0, 0, 0,  0, 0, 0,  0, 0, 0,
// ];

console.log('---input----');
logSudoku(input);

const result = solve(input);

console.log('---result---');
logSudoku(result);

function logSudoku(cells) {
  if (cells === null) {
    console.log('unable to solve sudoku');
    return;
  }

  let output = '';
  for (let i = 0; i < cells.length; i ++) {
    if (i !== 0 && i % 3 === 0) output += '|';
    if (i !== 0 && i % 9 === 0) output += '\n';
    if (i !== 0 && i % 27 === 0) output += '---|---|---\n';
    const cell = cells[i];
    output += cell === 0 ? ' ' : cell;
  }
  output += '|';
  console.log(output);
}
