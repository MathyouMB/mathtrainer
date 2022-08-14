import { Generator, Question } from "../";

class DivisionGenerator extends Generator {
  options = [];
  constructor(lowerBound, upperBound, guranteedNumbers, excludedNumbers) {
    super(lowerBound, upperBound, guranteedNumbers, excludedNumbers);
    this.options = this.constructOptions(
      lowerBound,
      upperBound,
      guranteedNumbers,
      excludedNumbers
    );
  }

  constructOptions(lowerBound, upperBound, guaranteedNumbers, excludedNumbers) {
    let options = [];
    if (guaranteedNumbers.length <= 0) {
      for (let i = lowerBound; i <= upperBound; i++) {
        for (let j = lowerBound; j <= upperBound; j++) {
          if (!(excludedNumbers.includes(i) || excludedNumbers.includes(j))) {
            const data = {
              dividend: i * j,
              divisor: i,
              quotient: j,
            };
            options.push(data);
          }
        }
      }
    } else {
      for (let i = lowerBound; i <= upperBound; i++) {
        for (let number of guaranteedNumbers) {
          if (!excludedNumbers.includes(i)) {
            const data = {
              dividend: i * number,
              divisor: number,
              quotient: i,
            };
            options.push(data);
          }
        }
      }
    }
    return options;
  }

  createQuestion() {
    const option =
      this.options[Math.floor(Math.random() * this.options.length)];
    return new Question(
      option.dividend,
      option.divisor,
      "division",
      option.quotient
    );
  }
}

export { DivisionGenerator };
