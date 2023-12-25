import { Generator, Question } from "..";

class PercentsOfWholeNumbersGenerator extends Generator {
  percentages;

  constructor(percentages) {
    super(0, 0, [], []);
    this.percentages = percentages;
  }

  createQuestion() {
    const wholeNumber = Math.floor(Math.random() * 100) + 1;
    console.log(this.percentages);
    const percentage =
      this.percentages[Math.floor(Math.random() * this.percentages.length)];
    const answer = (wholeNumber * percentage) / 100;
    return new Question(
      percentage,
      wholeNumber,
      "percents-of-whole-numbers",
      answer
    );
  }
}

export { PercentsOfWholeNumbersGenerator };
