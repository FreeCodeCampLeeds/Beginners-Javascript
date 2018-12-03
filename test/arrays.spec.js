const { expect } = require("chai");

const {
  empty,
  arrayLength,
  push,
  find,
  pop,
  sorted,
  concat,
  join,
  split
} = require("../src/arrays");

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
// describe("", () => {
//   it("return one element in an array", () => {
//     expect(find(["apple", "banana", "orange"])).that.includes("banana");
//   });
// });
describe("array pop", () => {
  it("it returns the last element in the array", () => {
    expect(pop(["broccoli", "cauliflower"])).to.eql("cauliflower");
  });
});
// 'broccoli', 'cauliflower'
describe("array sort", () => {
  it("it returns an array sorted in ascending order", () => {
    expect(sorted([5, 2, 1, 4, 3])).to.eql([1, 2, 3, 4, 5]);
  });
});

describe("array concat", () => {
  it("it returns a single array", () => {
    expect(concat(["a", "b", "c"], ["d", "e", "f"])).to.eql([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ]);
  });
});

describe("array join", () => {
  it("returns a joined array", () => {
    expect(join(["One", "Two", "Three"])).to.equal("One Two Three");
  });
});

describe("array join", () => {
  it("returns a joined array", () => {
    expect(split("One Two Three")).to.eql(["One", "Two", "Three"]);
  });
});
