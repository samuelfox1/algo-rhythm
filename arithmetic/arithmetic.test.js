const { describe, it, expect } = require('@jest/globals')
const arithmetic = require('./arithmetic')
const add = arithmetic.add
const subtract = arithmetic.subtract
const multiply = arithmetic.multiply
const divide = arithmetic.divide

describe("add", function () {
  it("should add two numbers", function () {
    const num1 = 10;
    const num2 = 24;

    const result = add(num1, num2);

    expect(result).toBe(34);
  });
});

describe("subtract", function () {
  it("should subtract the second number from the first number", function () {
    const num1 = 100;
    const num2 = 91;

    const result = subtract(num1, num2);

    expect(result).toBe(9);
  });
});

describe("multiply", function () {
  it("should multiply the two numbers", function () {
    const num1 = 7;
    const num2 = 70;

    const result = multiply(num1, num2);

    expect(result).toBe(490);
  });
});

describe("divide", function () {
  it("should divide the first number by the second number", function () {
    const num1 = 33;
    const num2 = 11;

    const result = divide(num1, num2);

    expect(result).toBe(3);
  });
});
