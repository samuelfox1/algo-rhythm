const { describe, it, expect } = require('@jest/globals')
const camelCase = require('./camel-case')

describe("camelCase", function () {
  it("should return 'invalid datatype' when datatype is not string", () => {
    const str = 0
    const result = camelCase(str)
    expect(result).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when datatype is not string", () => {
    const str = {}
    const result = camelCase(str)
    expect(result).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when datatype is not string", () => {
    const str = []
    const result = camelCase(str)
    expect(result).toBe('invalid datatype');
  })

  it("should return 'invalid datatype' when datatype is not string", () => {
    const str = true
    const result = camelCase(str)
    expect(result).toBe('invalid datatype');
  })

  it("should return 'empty string' when given an empty string", () => {
    const str = ''
    const result = camelCase(str)
    expect(result).toBe('invalid string')
  })

  it("should return 'helloWorld' when given 'Hello World'", function () {
    const str = "Hello World";

    const result = camelCase(str);

    expect(result).toBe("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given 'The rain in spain falls mainly on the plain'", function () {
    const str = "Javascript Is Fun";

    const result = camelCase(str);

    expect(result).toBe("javascriptIsFun");
  });
});
