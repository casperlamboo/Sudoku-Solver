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
    this._checkDuplicate();
    this._checkSolved();

    if (!this.duplicates && !this.solved) {
      for (const cell of this.cells) {

        if (cell.solved) {
          this.removeNumber(cell.number);
        }

        this.checkAll();
      };
    }
  }

  removeNumber (number) {
    if (!this.solved && !this.duplicates ){
      for (const cell of this.cells) {
        if (!cell.solved) {
          cell.removePossibility(number);
        }
      };

      this._checkSolved();
      this._checkDuplicate();
    }
  }

  checkAll () {
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

      this._checkSolved();
      this._checkDuplicate();
    }
  }

  _checkDuplicate () {
    let duplicates = false;
    const numbersChecked = [];

    for (const cell of this.cells) {
      if (cell.solved) {
        if (numbersChecked.indexOf(cell.number) !== -1) {
          duplicates = true;
          break;
        }
        numbersChecked.push(cell.number);
      }
    }

    this.duplicates = duplicates;
  }

  _checkSolved () {
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
  }
}
