const { describe, it, expect } = require('@jest/globals')
const isNumeric = require('./is-numeric')

describe("isNumeric", function () {
  it("should return true given the string '1234'", function () {
    const str = "1234";

    const result = isNumeric(str);

    expect(result).toBe(true);
  });

  it("should return true given the string '-23'", function () {
    const str = "-23";

    const result = isNumeric(str);

    expect(result).toBe(true);
  });

  it("should return true given the string '.48'", function () {
    const str = ".48";

    const result = isNumeric(str);

    expect(result).toBe(true);
  });

  it("should return true given the string '048.00'", function () {
    const str = "048.00";

    const result = isNumeric(str);

    expect(result).toBe(true);
  });

  it("should return true given the string '+44'", function () {
    const str = "+44";

    const result = isNumeric(str);

    expect(result).toBe(true);
  });

  it("should return false given the string '.+99'", function () {
    const str = ".+99";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given the string '-+1'", function () {
    const str = "-+1";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given the string '-.'", function () {
    const str = "-.";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given the string '55-'", function () {
    const str = "55-";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given the string '1.1.1'", function () {
    const str = "1.1.1";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given an empty string", function () {
    const str = "";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });

  it("should return false given the string 'a3", function () {
    const str = "a3";

    const result = isNumeric(str);

    expect(result).toBe(false);
  });
});
