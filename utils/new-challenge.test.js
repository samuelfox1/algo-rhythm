const { describe, it, expect, toBe, afterAll } = require(`@jest/globals`)
const { existingDirectory, createDirectory } = require(`./new-challenge`)
// const { rmdirSync } = require('fs')
const rimraf = require('rimraf')

const path = `./test-folder`;
const testChallenge = `test-challenge`

describe(`existingDirectory`, () => {
    const exists = `fizz-buzz`;
    const doesNotExist = `fizzy-buzzy`;

    it(`should return true if directory '${exists}' exists in ${path}`, () => {
        expect(existingDirectory(path, exists)).toBe(true);
    });
    it(`should return false if directory '${doesNotExist}' does not exist in ${path}`, () => {
        expect(existingDirectory(path, doesNotExist)).toBe(false);
    });
});

describe(`createDirectory`, () => {
    it(`should create a new directory`, () => {
        createDirectory(path, testChallenge)
        expect(existingDirectory(path, testChallenge)).toBe(true)
    });
});

// describe(``, () => {
//     it(``, () => {
//     });
// });

// delete the test  challenge created with the createDirectory tests
afterAll(() => rimraf(`${path}/${testChallenge}`, () => { }));
