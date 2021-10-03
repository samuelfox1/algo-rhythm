const { describe, it, expect } = require('@jest/globals')
const { isUnique } = require('./is-unique')

describe("isUnique", () => {
  it("should return true when given the array []", () => {
    expect(isUnique([])).toBe(true);
  });
  it("should return true when given the array [1, 2]", () => {
    expect(isUnique([1, 2])).toBe(true);
  });
  it("should return false when given the array [1,0,1]", () => {
    expect(isUnique([1, 0, 1])).toBe(false);
  });
  it("should return false when given the array [-1,0,-1]", () => {
    expect(isUnique([-1, 0, -1])).toBe(false);
  });
});
