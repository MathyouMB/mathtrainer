class Record {
  input;
  question;

  constructor(input, question) {
    this.input = input;
    this.question = question;
  }

  isCorrect() {
    return this.input === this.question.answer.toString();
  }
}

export { Record };
