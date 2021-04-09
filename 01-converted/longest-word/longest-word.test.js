const { describe, it, expect } = require('@jest/globals')
const longestWord = require('./longest-word')

describe("longestWord", function () {
  it("should return 'Jumped' when given 'The Quick Brown Fox Jumped Over The Lazy Dog'", function () {
    const str = "The Quick Brown Fox Jumped Over The Lazy Dog";

    const result = longestWord(str);

    expect(result).toBe("Jumped");
  });

  it("should return 'Remembers' when given 'The North Remembers'", function () {
    const str = "The North Remembers";

    const result = longestWord(str);

    expect(result).toBe("Remembers");
  });
});
