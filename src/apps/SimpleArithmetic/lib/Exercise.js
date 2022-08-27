import {
  AdditionGenerator,
  CommonFractionGenerator,
  DivisionGenerator,
  MultiplicationGenerator,
  RootsGenerator,
  SquaresGenerator,
  SubtractionGenerator,
} from "./Generators";

class Exercise {
  generators;

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
        case "commonFraction":
          generators.push(new CommonFractionGenerator());
          break;
        case "roots":
          generators.push(new RootsGenerator());
          break;
        case "squares":
          generators.push(new SquaresGenerator());
          break;
      }
    }
    return generators;
  };
}

export { Exercise };
