import * as Sudoku from '../src/index.js';

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

const sudoku = new Sudoku.Manager();
sudoku.set(input);

const result = sudoku.solve();

const cells = document.getElementById('sudoku').getElementsByTagName('td');

for (let i = 0; i < result.length; i ++) {
  cells[i].innerHTML = result[i];

  if (input[i] !== 0) {
    cells[i].style.fontWeight = 'bold';
  }
}