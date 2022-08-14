import { Generator, Question } from "../";

class SubtractionGenerator extends Generator {
  constructor(lowerBound, upperBound, guranteedNumbers, excludedNumbers) {
    super(lowerBound, upperBound, guranteedNumbers, excludedNumbers);
  }

  createQuestion() {
    let [operand1, operand2] = this.generateOperands();

    if (operand1 < operand2) {
      return new Question(
        operand2,
        operand1,
        "subtraction",
        operand2 - operand1
      );
    }

    return new Question(operand1, operand2, "subtraction", operand1 - operand2);
  }
}

export { SubtractionGenerator };
