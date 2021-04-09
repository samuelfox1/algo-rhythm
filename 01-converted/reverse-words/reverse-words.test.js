const { describe, expect, toBe, it } = require('@jest/globals')
const reverseWords = require('./reverse-words')

describe("reverseWords", function () {
  it("should reverse the words in a given string", function () {
    const str = "it does not matter how slowly you go as long as you do not stop";

    const result = reverseWords(str);

    expect(result).toBe(
      "stop not do you as long as go you slowly how matter not does it"
    );
  });
});
