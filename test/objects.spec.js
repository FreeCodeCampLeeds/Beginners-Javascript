const { expect } = require("chai");

const {
  empty,
  objectKeys,
  objectValues,
  keyCount,
  getUsername,
  deleteSurname
} = require("../src/objects");

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

describe("key Count", () => {
  it("returns a count of the keys in an object", () => {
    expect(keyCount({ a: 19, b: 02, c: 85, d: 18 })).to.equal(4);
  });
});

describe("get Username", () => {
  it("returns a username from an object", () => {
    expect(getUsername({ username: "JamesBond" })).to.equal("JamesBond");
  });
});

describe.only("delete surname", () => {
  it("returns an object with a deleted surname", () => {
    expect(deleteSurname({ firstname: "James", surname: "Bond" })).to.eql({
      firstname: "James"
    });
  });
});
