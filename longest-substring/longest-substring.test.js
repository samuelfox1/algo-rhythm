const { describe, expect, it } = require('@jest/globals')
const longestSubstring = require('./longest-substring')

describe("longestSubtring", () => {
  it(`should return 3 when given the string "acabbca"`, () => {
    var string = "acabbca"

    var result = longestSubstring(string);

    expect(result).toBe(3);
  });
  it(`should return 8 when given the string "asdkfjnasdkljvnasldj"`, () => {
    var string = "asdkfjnasdkljvnasldj"

    var result = longestSubstring(string);

    expect(result).toBe(8);
  });
  it(`should return 26 when given the string "abcdefghijklmnopqrstuvwxyz"`, () => {
    var string = "abcdefghijklmnopqrstuvwxyz"

    var result = longestSubstring(string);

    expect(result).toBe(26);
  });
});
