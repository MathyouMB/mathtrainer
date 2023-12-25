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

  displayOperation() {
    switch (this.operation) {
      case "addition":
        return "+";
      case "subtraction":
        return "-";
      case "multiplication":
        return "×";
      case "division":
        return "÷";
      case "commonFraction":
        return "/";
      case "roots":
        return "√";
      case "squares":
        return "²";
      case "percents-of-whole-numbers":
        return "% of";
    }
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
      case "commonFraction":
        return `${this.operand1} / ${this.operand2}`;
      case "roots":
        return `√${this.operand2}`;
      case "squares":
        return `${this.operand1}²`;
      case "percents-of-whole-numbers":
        return `${this.operand1}% of ${this.operand2}`;
    }
  }

  isEqualTo(question) {
    return (
      this.operand1 === question.operand1 &&
      this.operand2 === question.operand2 &&
      this.operation === question.operation
    );
  }
}

export { Question };
