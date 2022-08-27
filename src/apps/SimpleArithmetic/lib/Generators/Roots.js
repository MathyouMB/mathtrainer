import { Generator, Question } from "..";

class RootsGenerator extends Generator {
  possibleQuestions = [];

  constructor() {
    super(0, 0, [], []);
    this.possibleQuestions = this.constructQuestions();
  }

  constructQuestions() {
    let possibleQuestions = [];

    let questions = [
      {
        root: 1,
        answer: 1,
      },
      {
        root: 4,
        answer: 2,
      },
      {
        root: 9,
        answer: 3,
      },
      {
        root: 16,
        answer: 4,
      },
      {
        root: 25,
        answer: 5,
      },
      {
        root: 36,
        answer: 6,
      },
      {
        root: 49,
        answer: 7,
      },
      {
        root: 64,
        answer: 8,
      },
      {
        root: 81,
        answer: 9,
      },
      {
        root: 100,
        answer: 10,
      },
      {
        root: 121,
        answer: 11,
      },
      {
        root: 144,
        answer: 12,
      },
      {
        root: 169,
        answer: 13,
      },
      {
        root: 196,
        answer: 14,
      },
      {
        root: 225,
        answer: 15,
      },
      {
        root: 256,
        answer: 16,
      },
    ];

    for (let x of questions) {
      possibleQuestions.push(new Question("", x.root, "roots", x.answer));
    }

    return possibleQuestions;
  }

  createQuestion() {
    return this.possibleQuestions[
      Math.floor(Math.random() * this.possibleQuestions.length)
    ];
  }
}

export { RootsGenerator };
