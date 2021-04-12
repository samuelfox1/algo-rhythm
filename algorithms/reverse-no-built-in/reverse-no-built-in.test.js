const { describe, expect, it } = require('@jest/globals')
const reverse = require('./reverse-no-built-in')

describe("reverse", function () {
  it("should return '!dlroW olleH' when given 'Hello World!'", function () {
    const str = "Hello World!";

    const result = reverse(str);

    expect(result).toBe("!dlroW olleH");
  });

  it("should return '!dlroW eybooG' when given 'Goodbye World!'", function () {
    const str = "Goodbye World!";

    const result = reverse(str);

    expect(result).toBe("!dlroW eybdooG");
  });
});
