import {
  AdditionGenerator,
  DivisionGenerator,
  MultiplicationGenerator,
  SubtractionGenerator,
} from "./Generators";

import { Record } from "./Record";

class Trainer {
  generators;
  currentQuestion = null;
  records;

  constructor(
    lowerBound,
    upperBound,
    operations,
    guranteedNumbers,
    excludedNumbers
  ) {
    this.generators = this.constructGenerators(
      lowerBound,
      upperBound,
      operations,
      guranteedNumbers,
      excludedNumbers
    );
    this.records = [];
  }

  constructGenerators = (
    lowerBound,
    upperBound,
    operations,
    guranteedNumbers,
    excludedNumbers
  ) => {
    let generators = [];
    for (let operation of operations) {
      switch (operation) {
        case "addition":
          generators.push(
            new AdditionGenerator(
              lowerBound,
              upperBound,
              guranteedNumbers,
              excludedNumbers
            )
          );
          break;
        case "subtraction":
          generators.push(
            new SubtractionGenerator(
              lowerBound,
              upperBound,
              guranteedNumbers,
              excludedNumbers
            )
          );
          break;
        case "multiplication":
          generators.push(
            new MultiplicationGenerator(
              lowerBound,
              upperBound,
              guranteedNumbers,
              excludedNumbers
            )
          );
          break;
        case "division":
          generators.push(
            new DivisionGenerator(
              lowerBound,
              upperBound,
              guranteedNumbers,
              excludedNumbers
            )
          );
          break;
      }
    }
    return generators;
  };

  initialize = () => {
    this.generateQuestion();
    this.resetRecords();
  };

  submitAnswer = (answer) => {
    const record = this.recordAnswer(answer);
    this.generateQuestion();

    return record.isCorrect();
  };

  generateQuestion = () => {
    const generator =
      this.generators[Math.floor(Math.random() * this.generators.length)];
    const latestRecord = this.records[this.records.length - 1];

    let newQuestion = null;

    if (latestRecord) {
      while (
        newQuestion === null ||
        latestRecord.question.isEqualTo(newQuestion)
      ) {
        newQuestion = generator.createQuestion();
      }
    } else {
      newQuestion = generator.createQuestion();
    }

    this.currentQuestion = newQuestion;
  };

  recordAnswer = (answer) => {
    const record = new Record(answer, this.currentQuestion);
    this.records.push(record);

    return record;
  };

  resetRecords = () => {
    this.records = [];
  };

  determineScore = () => {
    let score = 0;
    for (let record of this.records) {
      if (record.isCorrect()) {
        score++;
      }
    }
    return score;
  };

  displayScore = () => {
    let score = this.determineScore();
    return `You got ${score} out of ${this.records.length} questions correct.`;
  };
}

export { Trainer };
