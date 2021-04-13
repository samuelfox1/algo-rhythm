const { describe, it, expect, beforeEach, afterEach } = require('@jest/globals')
const logNums = require('./log-nums')

beforeEach(function () {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function (...args) {
    const values = [];

    const log = function (args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function () {
      return values;
    };

    return log;
  })();
});

describe("logNums", function () {
  it("log numbers 1 through `num`", function () {
    const num = 10;

    logNums(num);

    expect(console.log.calledWith()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

afterEach(function () {
  console.log = window._temp.log;
  delete window._temp;
});
