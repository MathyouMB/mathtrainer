import { Generator, Question } from "../";

class CommonFractionGenerator extends Generator {
  possibleQuestions = [];

  constructor() {
    super(0, 0, [], []);
    this.possibleQuestions = this.constructQuestions();
  }

  constructQuestions() {
    let possibleQuestions = [];

    let questions = [
      {
        numerator: 1,
        denominator: 2,
        answer: 50,
      },
      {
        numerator: 1,
        denominator: 4,
        answer: 25,
      },
      {
        numerator: 3,
        denominator: 4,
        answer: 75,
      },
      {
        numerator: 1,
        denominator: 3,
        answer: 33,
      },
      {
        numerator: 2,
        denominator: 3,
        answer: 67,
      },
      {
        numerator: 1,
        denominator: 6,
        answer: 17,
      },
      {
        numerator: 5,
        denominator: 6,
        answer: 83,
      },
      {
        numerator: 1,
        denominator: 5,
        answer: 20,
      },
      {
        numerator: 2,
        denominator: 5,
        answer: 40,
      },
      {
        numerator: 3,
        denominator: 5,
        answer: 60,
      },
      {
        numerator: 4,
        denominator: 5,
        answer: 80,
      },
      {
        numerator: 1,
        denominator: 10,
        answer: 10,
      },
      {
        numerator: 3,
        denominator: 10,
        answer: 30,
      },
      {
        numerator: 5,
        denominator: 10,
        answer: 50,
      },
      {
        numerator: 7,
        denominator: 10,
        answer: 70,
      },
      {
        numerator: 9,
        denominator: 10,
        answer: 90,
      },
    ];

    for (let x of questions) {
      possibleQuestions.push(
        new Question(x.numerator, x.denominator, "commonFraction", x.answer)
      );
    }

    return possibleQuestions;
  }

  createQuestion() {
    return this.possibleQuestions[
      Math.floor(Math.random() * this.possibleQuestions.length)
    ];
  }
}

export { CommonFractionGenerator };
