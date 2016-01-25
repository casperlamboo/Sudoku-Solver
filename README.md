# Sudoku-Solver
JavaScript Sudoku Solver

```javascript
import SudokuSolver from 'casperlamboo/Sudoku-Solver';

// input is an array, unknown numbers should be declared as 0
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

const sudokuSolver = new SudokuSolver();
sudokuSolver.set(input);

const result = sudokuSolver.solve();

// result = [
//   9, 8, 3,  1, 5, 7,  4, 6, 2, 
//   1, 5, 2,  6, 4, 3,  7, 8, 9, 
//   6, 7, 4,  2, 9, 8,  5, 1, 3, 
// 
//   8, 6, 9,  7, 3, 5,  1, 2, 4, 
//   3, 2, 7,  9, 1, 4,  8, 5, 6, 
//   5, 4, 1,  8, 6, 2,  3, 9, 7, 
// 
//   4, 9, 5,  3, 2, 1,  6, 7, 8, 
//   7, 3, 6,  5, 8, 9,  2, 4, 1, 
//   2, 1, 8,  4, 7, 6,  9, 3, 5
// ];
```
