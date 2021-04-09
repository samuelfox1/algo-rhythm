const { describe, it, expect } = require('@jest/globals')
const maxNum = require('./max-num')

describe("maxNum", function () {
  it("returns the largest number in a given array", function () {
    const arr = [2, 3, -2, 99, 100, 2222, 321];

    const result = maxNum(arr);

    expect(result).toBe(2222);
  });
});
