import {
  AdditionGenerator,
  CommonFractionGenerator,
  DivisionGenerator,
  MultiplicationGenerator,
  PercentsOfWholeNumbersGenerator,
  RootsGenerator,
  SquaresGenerator,
  SubtractionGenerator,
} from "./Generators";

class Exercise {
  generators;

  constructor(args) {
    this.generators = this.constructGenerators(args);
    this.records = [];
  }

  constructGenerators = (args) => {
    let generators = [];
    const lowerBound = args.lowerBound;
    const upperBound = args.upperBound;
    const operations = args.operations;
    const guranteedNumbers = args.guranteedNumbers;
    const excludedNumbers = args.excludedNumbers;
    const percentages = args.percentages;
    console.log(args);

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
        case "commonFraction":
          generators.push(new CommonFractionGenerator());
          break;
        case "roots":
          generators.push(new RootsGenerator());
          break;
        case "squares":
          generators.push(new SquaresGenerator());
          break;
        case "percents-of-whole-numbers":
          generators.push(new PercentsOfWholeNumbersGenerator(percentages));
          break;
      }
    }
    return generators;
  };
}

export { Exercise };
