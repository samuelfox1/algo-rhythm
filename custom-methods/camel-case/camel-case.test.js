const { describe, it, expect } = require('@jest/globals')
const camelCase = require('./camel-case')

describe("camelCase", function () {
  it("should return 'invalid datatype' when given a number", () => {
    expect(camelCase(0)).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when given an object", () => {
    expect(camelCase({})).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when given an array", () => {
    expect(camelCase([])).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when given a boolean", () => {
    expect(camelCase(true)).toBe('invalid datatype');
  })

  it("should return 'invalid string' when given an empty string", () => {
    expect(camelCase('')).toBe('invalid string')
  })

  it("should return 'helloWorld' when given 'Hello World'", function () {
    expect(camelCase("Hello World")).toBe("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given ''The-rain-in-spain-falls-mainly-on-the-plain''", function () {
    expect(camelCase('The-rain-in-spain-falls-mainly-on-the-plain')).toBe("theRainInSpainFallsMainlyOnThePlain");
  });
});
