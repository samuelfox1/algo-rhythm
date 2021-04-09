const { describe, it, expect } = require('@jest/globals')
const zeroesAndOnes = require('./zeroes-and-ones')

describe("zeroesAndOnes", function () {
  it(`should return true when given '10101010'`, function () {
    const str = "10101010";

    const result = zeroesAndOnes(str);

    expect(result).toBe(true);
  });

  it(`should return false when given '00010'`, function () {
    const str = "00010";

    const result = zeroesAndOnes(str);

    expect(result).toBe(false);
  });

  it(`should return true when given the number
  '001101'`, function () {
    const str = "001101";

    const result = zeroesAndOnes(str);

    expect(result).toBe(true);
  });

  it(`should return true when given ''`, function () {
    const str = "";

    const result = zeroesAndOnes(str);

    expect(result).toBe(true);
  });
});
