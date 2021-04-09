const { describe, it, expect } = require('@jest/globals')
const acronymBuilder = require('./acronym-builder')

describe("acronymBuilder", function () {
  it("should return 'ABC' when given the 'always be coding'", function () {
    const str = "always be coding";

    const result = acronymBuilder(str);

    expect(result).toBe("ABC");
  });

  it("should return 'DGS' when given the 'don't get stuck", function () {
    const str = "don't get stuck";

    const result = acronymBuilder(str);

    expect(result).toBe("DGS");
  });
});