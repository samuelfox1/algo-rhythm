const { describe, it, expect, beforeEach, afterEach } = require('@jest/globals')
const logEvenNums = require('./log-even-nums')

beforeEach(function () {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function (...args) {
    let values = [];

    let log = function (args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function () {
      return values;
    };

    return log;
  })();
});

describe("logEvenNums", function () {
  it("log even numbers 0 through `num`", function () {
    const num = 13;

    logEvenNums(num);

    expect(console.log.calledWith()).toEqual([0, 2, 4, 6, 8, 10, 12]);
  });
});

afterEach(function () {
  console.log = window._temp.log;
  delete window._temp;
});
