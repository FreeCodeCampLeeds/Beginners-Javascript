const { expect } = require("chai");

const { empty, objectKeys } = require("../src/objects");

describe("empty object", () => {
  it("returns an empty object", () => {
    expect(empty({})).to.be.an("object").that.is.empty;
  });
});

describe.only("object keys", () => {
  const input = { name: "James" };
  const actual = objectKeys(input);
  const expected = ["name"];
  it("returns the keys from an object", () => {
    expect(actual).to.eql(expected);
  });
});
