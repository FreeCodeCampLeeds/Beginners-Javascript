const { expect } = require("chai");

const { empty, arrayLength, push, find, sorted } = require("../src/arrays");

describe("empty array", () => {
  it("returns an empty array", () => {
    expect(empty([])).to.be.an("array").that.is.empty;
  });
});
describe("array length", () => {
  it("returns an array of length 5", () => {
    expect(arrayLength([1, 2, 3, 5, 4])).to.have.lengthOf(5);
  });
});

describe("array push", () => {
  it("returns adds a new element to an array", () => {
    expect(push([1, 2, 3], 4)).to.have.lengthOf(4);
    expect(push([1, 2, 3], 4)[3]).to.equal(4);
  });
});
// describe.only("", () => {
//   it("return one element in an array", () => {
//     expect(find(["apple", "banana", "orange"])).that.includes("banana");
//   });
// });
describe.only("array sort", () => {
  it("it returns an array sorted in ascending order", () => {
    expect(sorted([5, 2, 1, 4, 3])).to.eql([1, 2, 3, 4, 5]);
  });
});
