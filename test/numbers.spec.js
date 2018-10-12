const { expect } = require("chai");

const {
  addition,
  negativeNumberAddition,
  lower,
  greaterThan
} = require("../src/numbers");

describe("basic addition", () => {
  it("add returns two numbers added together", () => {
    expect(addition(2, 3)).to.equal(5);
    expect(addition(5, 6)).to.equal(11);
  });
});
describe("negative number addition", () => {
  it("add returns negative numbers added together", () => {
    expect(negativeNumberAddition(-4, -3)).to.equal(-7);
    expect(negativeNumberAddition(-5, -6)).to.equal(-11);
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
