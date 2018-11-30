const { expect } = require("chai");

const {
  emptyString,
  stringConcat,
  stringConcatSpaced,
  stringLength,
  lowerCaseString,
  upperCaseString
} = require("../src/strings");

describe("empty array", () => {
  it("returns an empty string", () => {
    expect(emptyString("")).to.be.a("string").that.is.empty;
  });
});

describe("string concat", () => {
  it("returns an empty string", () => {
    expect(stringConcat("string", "concatination")).to.eql(
      "string concatination"
    );
  });
});

describe("string concat with spaces", () => {
  it("returns an empty string", () => {
    expect(
      stringConcatSpaced("string", "concatination", "with", "spaces")
    ).to.eql("string concatination with spaces");
  });
});

describe("string length", () => {
  it("returns the length of a string", () => {
    expect(
      stringLength("string")
    ).to.eql(6);
  });
});

describe("string lowercase ", () => {
  it("returns a string in lowercase", () => {
    expect(
      lowerCaseString("JAVASCRIPT")
    ).to.eql("javascript");
  });
});

describe("string lowercase ", () => {
  it("returns a string in uppercase", () => {
    expect(
      upperCaseString("javascript")
    ).to.eql("JAVASCRIPT");
  });
});

