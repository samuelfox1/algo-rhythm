const { describe, expect, it } = require('@jest/globals')
const vowelCount = require('./vowel-count')

describe("vowelCount", function () {
  it('should return the number 3 when given the string "programmer"', function () {
    const str = "programmer";

    const result = vowelCount(str);

    expect(result).toBe(3);
  });

  it('should return the number 8 when given the string "I think, therefore I am."', function () {
    const str = "I think, therefore I am.";

    const result = vowelCount(str);

    expect(result).toBe(8);
  });

  it("should return the number 0 when given an empty string.", function () {
    const str = "";

    const result = vowelCount(str);

    expect(result).toBe(0);
  });
});
