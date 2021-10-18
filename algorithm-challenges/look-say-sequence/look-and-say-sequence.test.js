const { describe, it, expect, toBe } = require('@jest/globals')
const lookAndSay = require('./look-and-say-sequence')

describe("lookAndSaySequence", function () {
  it("should return '2114331827' when given '114333877'", function () {
    const n = 114333877;

    const result = lookAndSay(n);

    expect(result).toBe(2114331827);
  });

  it("should return '10' when given '0'", function () {
    const n = 0;

    const result = lookAndSay(n);

    expect(result).toBe(10);
  });

  it("should return '1921321713' when given '91122273'", function () {
    const n = 91122273;

    const result = lookAndSay(n);

    expect(result).toBe(1921321713);
  });
});
