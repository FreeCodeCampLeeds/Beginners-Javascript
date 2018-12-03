const { expect } = require("chai");

const empty = require("../src/objects");

describe("empty object", () => {
  it("returns an empty object", () => {
    expect(empty({})).to.be.an("object").that.is.empty;
  });
});
