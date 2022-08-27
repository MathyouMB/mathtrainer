import { Generator, Question } from "..";

class SquaresGenerator extends Generator {
  possibleQuestions = [];

  constructor() {
    super(0, 0, [], []);
    this.possibleQuestions = this.constructQuestions();
  }

  constructQuestions() {
    let possibleQuestions = [];

    let number = 16;

    for (let x = 1; x <= number; x++) {
      possibleQuestions.push(new Question(x, "", "squares", x * x));
    }

    return possibleQuestions;
  }

  createQuestion() {
    return this.possibleQuestions[
      Math.floor(Math.random() * this.possibleQuestions.length)
    ];
  }
}

export { SquaresGenerator };
