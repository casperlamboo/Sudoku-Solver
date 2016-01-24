export default class CohesionElement {
  constructor (...cells) {
    for (const cell of cells) {
      cell.addCohesion(this);
    }

    this.cells = cells;

    this.solved = false;
    this.duplicates = false;
  }

  solve () {
    this.checkDuplicate();
    this.checkSolved();

    if (!this.duplicates && !this.solved) {
      for (const cell of this.cells) {

        if (cell.solved) {
          this.removeNumber(cell.number);
        }

        this.checkFull();
      };
    }
  }

  removeNumber (number) {
    if (!this.solved && !this.duplicates ){
      for (const cell of this.cells) {
        if (!cell.solved) {
          cell.removePlausibility(number);
        }
      };

      this.checkSolved();
      this.checkDuplicate();
    }
  }

  checkFull () {
    if (!this.solved && !this.duplicates) {
      for (let i = 1; i <= 9; i ++) {
        const empty = [];
        let check = true;

        for (const cell of this.cells) {
          if (cell.number === i) {
            check = false;
          }
          else if (!cell.solved && cell.possibilities.indexOf(i) !== -1) {
            empty.push(cell);
          }
        };

        if (empty.length === 1 && check) {
          empty[0].setSolved(i);
        }
      }

      this.checkSolved();
      this.checkDuplicate();
    }
  }

  checkDuplicate () {
    this.duplicates = false;
    const numbersChecked = [];

    for (const cell of this.cells) {
      if (cell.solved) {
        if (numbersChecked.indexOf(cell.number) !== -1) {
          this.duplicates = true;
          break;
        }
        numbersChecked.push(cell.number);
      }
    }

    return this.duplicates;
  }

  checkSolved () {
    const numbersLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const cell of this.cells) {
      if (cell.solved) {
        const index = numbersLeft.indexOf(cell.number);
        if (index !== 0) {
          numbersLeft.splice(index, 1);
        }
      }
    }

    this.solved = (numbersLeft.length === 0 && this.duplicates === false);

    return this.solved;
  }
}
