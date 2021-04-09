const { describe, expect, toBe, it } = require('@jest/globals')
const titleCase = require('./title-case')

describe("titleCase", function () {
  it("should return `The Quick Brown Fox Jumped Over The Lazy Dog` when given `the quick brown fox jumped over the lazy dog`", function () {
    const str = "the quick brown fox jumped over the lazy dog";

    const result = titleCase(str);

    expect(result).toBe("The Quick Brown Fox Jumped Over The Lazy Dog");
  });

  it("should return `A Christmas Carol` when given `a christmas carol`", function () {
    const str = "a christmas carol";

    const result = titleCase(str);

    expect(result).toBe("A Christmas Carol");
  });
});
