const { expect } = require("chai");

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  lower,
  greaterThan,
  increment,
  decrement,
  assignment,
  additionAssignment,
  subtractionAssignment,
  multiplicationAssignment,
  divisionAssignment,
  remainderAssignment,
  digitCount
} = require("../src/numbers");

//addition
describe("basic addition", () => {
  it("returns the sum of two numbers added", () => {
    expect(addition(2, 3)).to.equal(5);
    expect(addition(5, 6)).to.equal(11);
  });
});
// subtraction
describe("basic subtraction", () => {
  it("returns the sum of 2 numbers subtracted", () => {
    expect(subtraction(5, 3)).to.equal(2);
  });
});

// multiplication
describe("basic multiplication", () => {
  it("returns the sum of 2 numbers multiplied", () => {
    expect(multiplication(5, 3)).to.equal(15);
  });
});

// division
describe("basic division", () => {
  it("returns the sum of 2 numbers divided", () => {
    expect(division(6, 3)).to.equal(2);
  });
});

// modulus
describe("modulus operations", () => {
  it("returns the remainder of 2 numbers", () => {
    expect(modulus(6, 3)).to.equal(0);
  });
});
describe("less than", () => {
  it("returns a lower than value", () => {
    expect(lower(3, 4)).to.be.true;
    expect(lower(7, 11)).to.be.true;
    expect(lower(-7, 1)).to.be.true;
  });
});

describe("greater than", () => {
  it("returns a greater than value", () => {
    expect(greaterThan(5, 4)).to.be.true;
  });
});

describe("increment operator", () => {
  it("should count up from 5 to 6", () => {
    expect(increment(5)).to.equal(6);
  });
});

describe("decrement operator", () => {
  it("returns a number decreased by one", () => {
    expect(decrement(6)).to.equal(5);
  });
});

describe("equal assignment operator", () => {
  it("returns a reassigned number", () => {
    expect(assignment(10)).to.equal(5);
  });
});

describe("addition Assignment operator", () => {
  it("returns an addition and a reassigned number", () => {
    expect(additionAssignment(12, 6)).to.equal(18);
  });
});

describe("subtraction Assignment operator", () => {
  it("returns a subtracted and reassigned number", () => {
    expect(subtractionAssignment(12, 6)).to.equal(6);
  });
});

describe("multiplication Assignment operator", () => {
  it("returns a multipled and reassigned number", () => {
    expect(multiplicationAssignment(2, 6)).to.equal(12);
  });
});

//divisionAssignment
describe(" division Assignment operator", () => {
  it("returns a divided and reassigned number", () => {
    expect(divisionAssignment(12, 2)).to.equal(6);
  });
});

// remainderAssignment
describe(" remainder Assignment operator", () => {
  it("returns a remainder and reassigned number", () => {
    expect(remainderAssignment(5, 3)).to.equal(2);
  });
});

// digitCount
describe(" Digits in a number", () => {
  it("returns the number of digits in a number", () => {
    expect(digitCount(12345)).to.equal(5);
  });
});