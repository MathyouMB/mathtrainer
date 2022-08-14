class Generator {
  lowerBound;
  upperBound;
  guranteedNumbers;
  excludedNumbers;

  constructor(lowerBound, upperBound, guranteedNumbers, excludedNumbers) {
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.guranteedNumbers = guranteedNumbers;
    this.excludedNumbers = excludedNumbers;
  }

  createQuestion() {}

  generateOperands() {
    let operand1 = this.generateOperand();
    let operand2 = this.generateOperand();

    /*
    if (this.guranteedNumbers.length > 0 || this.guranteedNumbers.includes(operand1)) {
      operand2 = this.generateOperand();
    } else {
      operand2 =
        this.guranteedNumbers[
          Math.floor(Math.random() * this.guranteedNumbers.length)
        ];
    }
    */

    return [operand1, operand2];
  }

  generateOperand() {
    let operand =
      Math.floor(Math.random() * (this.upperBound - this.lowerBound + 1)) +
      this.lowerBound;

    while (this.excludedNumbers.includes(operand)) {
      operand =
        Math.floor(Math.random() * (this.upperBound - this.lowerBound + 1)) +
        this.lowerBound;
    }

    return operand;
  }
}

export { Generator };
