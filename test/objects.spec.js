const { expect } = require("chai");

const { empty, objectKeys, objectValues } = require("../src/objects");
const empty = require("../src/objects");

describe("empty object", () => {
  it("returns an empty object", () => {
    expect(empty({})).to.be.an("object").that.is.empty;
  });
});

describe("object keys", () => {
  const input = { name: "James" };
  const actual = objectKeys(input);
  const expected = ["name"];
  it("returns the keys from an object", () => {
    expect(actual).to.eql(expected);
  });
});

describe("object values", () => {
  const input = { name: "James", age: 18, city: "bradford" };
  const actual = objectValues(input);
  const expected = ["James", 18, "bradford"];
  it("returns the values from an object", () => {
    expect(actual).to.eql(expected);
  });
});
