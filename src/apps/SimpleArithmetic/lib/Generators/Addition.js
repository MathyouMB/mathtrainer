import { Generator, Question } from "../";

class AdditionGenerator extends Generator {
  constructor(lowerBound, upperBound, guranteedNumbers, excludedNumbers) {
    super(lowerBound, upperBound, guranteedNumbers, excludedNumbers);
  }

  createQuestion() {
    let [operand1, operand2] = this.generateOperands();
    return new Question(operand1, operand2, "addition", operand1 + operand2);
  }
}

export { AdditionGenerator };
