const { describe, it, expect, beforeEach, afterEach } = require('@jest/globals')
const countdown = require('./countdown')

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

describe("countdown", function () {
  it("log numbers from `num` down to 1", function () {
    const num = 15;

    countdown(num);

    expect(console.log.calledWith()).toEqual([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

afterEach(function () {
  console.log = window._temp.log;
  delete window._temp;
});
