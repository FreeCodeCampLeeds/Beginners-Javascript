const { expect } = require("chai");

const {
  absoluteValue,
  higher,
  lower,
  powers,
  ceiling
} = require("../src/math");

describe("absolute value", () => {
  it("returns the absolute value of a number", () => {
    expect(absoluteValue(-7.25)).to.equal(7.25);
  });
});

describe("maximum value", () => {
  const maxi = [1, 2, 7, 18];
  it("returns the highest value from a selection of numbers", () => {
    expect(higher(maxi)).to.equal(18);
  });
});

describe("minimum value", () => {
  const mini = [1, 2, 7, 18];
  it("returns the number with the lowest value from a selection of numbers", () => {
    expect(lower(mini)).to.equal(1);
  });
});

describe("working with powers", () => {
  it("returns a number, representing the value of x to the power of y", () => {
    expect(powers(4, 3)).to.equal(64);
  });
});

describe("working with rounded numbers", () => {
  it("returns a rounded number upward to its nearest integer", () => {
    expect(ceiling(2.1)).to.equal(3);
  });
});
