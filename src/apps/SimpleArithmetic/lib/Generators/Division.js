import { Generator, Question } from "../";

class DivisionGenerator extends Generator {
  constructor(lowerBound, upperBound, guranteedNumbers, excludedNumbers) {
    super(lowerBound, upperBound, guranteedNumbers, excludedNumbers);
  }

  createQuestion() {
    let [operand1, operand2] = this.generateOperands();
    return new Question(operand1, operand2, "division", operand1 / operand2);
  }
}

export { DivisionGenerator };
