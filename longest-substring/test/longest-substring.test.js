var expect = chai.expect;

describe("longestSubtring", function () {
  it(`should return 3 when given the string "acabbca"`, function () {
    var string = "acabbca"

    var result = longestSubstring(string);

    expect(result).to.eql(3);
  });
  it(`should return 8 when given the string "asdkfjnasdkljvnasldj"`, function () {
    var string = "asdkfjnasdkljvnasldj"

    var result = longestSubstring(string);

    expect(result).to.eql(8);
  });
  it(`should return 26 when given the string "abcdefghijklmnopqrstuvwxyz"`, function () {
    var string = "abcdefghijklmnopqrstuvwxyz"

    var result = longestSubstring(string);

    expect(result).to.eql(26);
  });

});
