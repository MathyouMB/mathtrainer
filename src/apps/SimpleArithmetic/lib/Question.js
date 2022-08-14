class Question {
  operand1;
  operand2;
  operation;
  answer;

  constructor(operand1, operand2, operation, answer) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operation = operation;
    this.answer = answer;
  }

  display() {
    switch (this.operation) {
      case "addition":
        return `${this.operand1} + ${this.operand2}`;
      case "subtraction":
        return `${this.operand1} - ${this.operand2}`;
      case "multiplication":
        return `${this.operand1} × ${this.operand2}`;
      case "division":
        return `${this.operand1} ÷ ${this.operand2}`;
    }
  }
}

export { Question };
