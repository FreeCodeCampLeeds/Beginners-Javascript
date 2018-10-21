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
  decrement
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
