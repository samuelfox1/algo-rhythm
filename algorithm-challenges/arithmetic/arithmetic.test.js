const { describe, it, expect } = require('@jest/globals')
const doMath = require('./arithmetic')


describe("doMath with addition operator", () => {
  it("should add two numbers", () => {
    const num1 = 10;
    const operator = '+';
    const num2 = 24;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(34);
  });
});

describe("doMath with subtraction operator", () => {
  it("should subtract the second number from the first number", () => {
    const num1 = 100;
    const operator = '-'
    const num2 = 91;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(9);
  });
});

describe("doMath with division operator", () => {
  it("should divide the first number by the second number", () => {
    const num1 = 33;
    const operator = '/'
    const num2 = 11;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(3);
  });
});

describe("doMath with multiplication operator", () => {
  it("should multiply the two numbers", () => {
    const num1 = 7;
    const operator = '*'
    const num2 = 70;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(490);
  });
});

describe("doMath with exponential operator", () => {
  it("should square the two numbers", () => {
    const num1 = 10;
    const operator = '**'
    const num2 = 2;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(100);
  });
});

describe("doMath with modulus operator", () => {
  it("should return 0 for 10 % 2", () => {
    const num1 = 10;
    const operator = '%'
    const num2 = 2;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(0);
  });

  it("should return 1 for 10 % 3", () => {
    const num1 = 10;
    const operator = '%'
    const num2 = 3;

    const result = doMath(num1, operator, num2);

    expect(result).toBe(1);
  });
});

describe("doMath with invalid operator", () => {
  it("should return 'invalid operator' when an invalid operator is used", () => {
    const num1 = 10;
    const operator = '.'
    const num2 = 1;

    const result = doMath(num1, operator, num2);

    expect(result).toEqual('invalid operator');
  });
});

describe("doMath with invalid number", () => {
  it("should return 'invalid number' when an invalid number is used", () => {
    const num1 = 10;
    const operator = '.'
    const num2 = '1';

    const result = doMath(num1, operator, num2);

    expect(result).toEqual('invalid number');
  });
});
