const { describe, expect, it } = require('@jest/globals')
const sumArray = require('./sum-array')

describe("sumArray", function () {
  it("returns the total of all the numbers in `arr`", function () {
    const arr = [4, 8, 15, 16, 23, 42];

    const result = sumArray(arr);

    expect(result).toBe(108);
  });
});
