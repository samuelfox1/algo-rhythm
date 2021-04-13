const { describe, it, expect } = require('@jest/globals')
const acronymBuilder = require('./acronym-builder')

describe("acronymBuilder", function () {
  it("should return 'invalid datatype, expected a string' when given a datatype is not string", () => {
    const str = 0
    const result = acronymBuilder(str)
    expect(result).toBe('invalid datatype, expected a string')
  })

  it("should return 'invalid datatype, expected a string' when given a datatype is not string", () => {
    const str = {}
    const result = acronymBuilder(str)
    expect(result).toBe('invalid datatype, expected a string')
  })

  it("should return 'invalid datatype, expected a string' when given a datatype is not string", () => {
    const str = []
    const result = acronymBuilder(str)
    expect(result).toBe('invalid datatype, expected a string')
  })

  it("should return 'invalid string, can not be empty' when given an empty string", () => {
    const str = ''
    const result = acronymBuilder(str)
    expect(result).toBe('invalid string, can not be empty')
  })

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