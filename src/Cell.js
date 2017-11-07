export default class Cell {
  constructor(number) {
    this.cohesionElements = [];

    this.number = number;
    this.solved = (number !== 0) ? true : false;

    this.possibilities = this.solved ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  addCohesion(cohesionElement) {
    this.cohesionElements.push(cohesionElement);
  }

  removePossibility(number) {
    const index = this.possibilities.indexOf(number);
    if (index !== -1) {
      this.possibilities.splice(index, 1);

      if (this.possibilities.length === 1) {
        this.setSolved(this.possibilities[0]);
      }
      else {
        for (const cohesionElement of this.cohesionElements) {
          cohesionElement.checkAll();
        }
      }
    }
  }

  setSolved(number) {
    this.solved = true;
    this.number = number;
    this.possibilities = [number];

    for (const cohesionElement of this.cohesionElements) {
      cohesionElement.removeNumber(number);
      cohesionElement.checkAll();
    }
  }
}
