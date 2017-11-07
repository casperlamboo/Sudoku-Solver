import Cell from './Cell.js';
import CohesionElement from './CohesionElement.js';

export default function solve(cells) {
  cells = cells.map((cell) => new Cell(cell));

  const [
     c0,  c1,  c2,    c3,  c4,  c5,    c6,  c7,  c8,
     c9, c10, c11,   c12, c13, c14,   c15, c16, c17,
    c18, c19, c20,   c21, c22, c23,   c24, c25, c26,

    c27, c28, c29,   c30, c31, c32,   c33, c34, c35,
    c36, c37, c38,   c39, c40, c41,   c42, c43, c44,
    c45, c46, c47,   c48, c49, c50,   c51, c52, c53,

    c54, c55, c56,   c57, c58, c59,   c60, c61, c62,
    c63, c64, c65,   c66, c67, c68,   c69, c70, c71,
    c72, c73, c74,   c75, c76, c77,   c78, c79, c80
  ] = cells;

  const cohesionElements = [
    // rows
    new CohesionElement( c0,  c1,  c2,  c3,  c4,  c5,  c6,  c7,  c8),
    new CohesionElement( c9, c10, c11, c12, c13, c14, c15, c16, c17),
    new CohesionElement(c18, c19, c20, c21, c22, c23, c24, c25, c26),
    new CohesionElement(c27, c28, c29, c30, c31, c32, c33, c34, c35),
    new CohesionElement(c36, c37, c38, c39, c40, c41, c42, c43, c44),
    new CohesionElement(c45, c46, c47, c48, c49, c50, c51, c52, c53),
    new CohesionElement(c54, c55, c56, c57, c58, c59, c60, c61, c62),
    new CohesionElement(c63, c64, c65, c66, c67, c68, c69, c70, c71),
    new CohesionElement(c72, c73, c74, c75, c76, c77, c78, c79, c80),
    // collums
    new CohesionElement( c0,  c9, c18, c27, c36, c45, c54, c63, c72),
    new CohesionElement( c1, c10, c19, c28, c37, c46, c55, c64, c73),
    new CohesionElement( c2, c11, c20, c29, c38, c47, c56, c65, c74),
    new CohesionElement( c3, c12, c21, c30, c39, c48, c57, c66, c75),
    new CohesionElement( c4, c13, c22, c31, c40, c49, c58, c67, c76),
    new CohesionElement( c5, c14, c23, c32, c41, c50, c59, c68, c77),
    new CohesionElement( c6, c15, c24, c33, c42, c51, c60, c69, c78),
    new CohesionElement( c7, c16, c25, c34, c43, c52, c61, c70, c79),
    new CohesionElement( c8, c17, c26, c35, c44, c53, c62, c71, c80),
    // squares
    new CohesionElement( c0,  c1,  c2,  c9, c10, c11, c18, c19, c20),
    new CohesionElement( c3,  c4,  c5, c12, c13, c14, c21, c22, c23),
    new CohesionElement( c6,  c7,  c8, c15, c16, c17, c24, c25, c26),
    new CohesionElement(c27, c28, c29, c36, c37, c38, c45, c46, c47),
    new CohesionElement(c30, c31, c32, c39, c40, c41, c48, c49, c50),
    new CohesionElement(c33, c34, c35, c42, c43, c44, c51, c52, c53),
    new CohesionElement(c54, c55, c56, c63, c64, c65, c72, c73, c74),
    new CohesionElement(c57, c58, c59, c66, c67, c68, c75, c76, c77),
    new CohesionElement(c60, c61, c62, c69, c70, c71, c78, c79, c80)
  ];

  for (const cohesionElement of cohesionElements) {
    cohesionElement.solve();
  }

  if (checkSolved(cells)) return getResult(cells, cohesionElements);

  while (!checkDuplicates(cohesionElements) && !checkSolved(cells)) {
    const sampleInput = [];
    let usedRandom;

    for (const cell of cells) {
      let { number } = cell;

      if (!usedRandom && number === 0) {
        usedRandom = cell;
        number = cell.possibilities[0];
      }

      sampleInput.push(number);
    }

    const sample = solve(sampleInput);

    if (sample === null) {
      usedRandom.removePossibility(usedRandom.possibilities[0]);
    } else {
      for (let i = 0; i < cells.length; i ++) {
        const cell = cells[i];
        const resultCell = sample[i];
        if (!cell.solved && resultCell !== 0) {
          cell.setSolved(resultCell);
        }
      }
    }
  }

  return getResult(cells, cohesionElements);
}

function checkSolved(cells) {
  for (const cell of cells) {
    if (!cell.solved) return false;
  }
  return true;
}

function checkDuplicates(cohesionElements) {
  for (const cohesionElements of cohesionElements) {
    if (cohesionElements.duplicates) return true;
  }
  return false;
}

function getResult(cells, cohesionElements) {
  if (checkDuplicates(cohesionElements)) return null;

  return cells.map(({ number }) => number);
}
