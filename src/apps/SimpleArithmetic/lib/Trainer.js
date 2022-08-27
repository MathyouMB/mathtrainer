import { Exercise } from "./Exercise";
import { Record } from "./Record";

class Trainer {
  exercises;
  currentQuestion = null;
  records;
  currentExerciseIndex = 0;

  constructor(exercises) {
    this.exercises = this.constructExercises(exercises);
    this.records = [];
  }

  constructExercises = (exercises) => {
    let constructedExercises = [];

    for (let exercise of exercises) {
      const e = new Exercise(
        exercise.lowerBound,
        exercise.upperBound,
        exercise.operations,
        exercise.guranteedNumbers,
        exercise.excludedNumbers
      );
      constructedExercises.push(e);
    }

    return constructedExercises;
  };

  initialize = () => {
    this.generateQuestion();
    this.resetRecords();
  };

  submitAnswer = (answer) => {
    const record = this.recordAnswer(answer);

    return record.isCorrect();
  };

  generateQuestion = () => {
    const exercise =
      this.exercises[this.currentExerciseIndex % this.exercises.length];

    const generator =
      exercise.generators[
        Math.floor(Math.random() * exercise.generators.length)
      ];

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

    this.currentExerciseIndex += 1;
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
}

export { Trainer };
