const { beforeEach, describe, it, expect } = require('@jest/globals')
const reverseInPlace = require('./reverse-in-place')
const sinon = require('sinon')

beforeEach(function () {
  sinon.spy(Array.prototype, "reverse");
});

describe("reverseInPlace", function () {
  it("should reverse an array in place without using the built-in 'reverse' method", function () {
    const arr = [1, 2, 3, 4, 5];
    const reversed = JSON.parse(JSON.stringify(arr)).reverse();
    const result = reverseInPlace(arr);
    expect(result).toBe(arr);
    expect(result).toEqual(reversed);
    expect(Array.prototype.reverse.calledOnce).toBe(true);
  });
});
