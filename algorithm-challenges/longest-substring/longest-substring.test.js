const { describe, expect, it } = require('@jest/globals')
const longestSubstring = require('./longest-substring')

describe("longestSubtring", () => {
  it(`should return 3 when given the string "acabbca"`, () => {
    const string = "acabbca"

    const result = longestSubstring(string);

    expect(result).toBe(3);
  });
  it(`should return 8 when given the string "asdkfjnasdkljvnasldj"`, () => {
    const string = "asdkfjnasdkljvnasldj"

    const result = longestSubstring(string);

    expect(result).toBe(8);
  });
  it(`should return 26 when given the string "abcdefghijklmnopqrstuvwxyz"`, () => {
    const string = "abcdefghijklmnopqrstuvwxyz"

    const result = longestSubstring(string);

    expect(result).toBe(26);
  });
});
