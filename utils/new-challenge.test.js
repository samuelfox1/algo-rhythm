const { describe, it, expect, toBe, afterAll } = require(`@jest/globals`)
const rimraf = require('rimraf')
const { existingDirectory, createDirectory, createFile } = require(`./new-challenge`)

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

describe(`createFile`, () => {
    const newFilePath = `${path}/${testChallenge}/${testChallenge}.js`
    const newFileContents = `hello from ${testChallenge}.js`

    it(`should create a new file in the directory ${newFilePath}`, () => {
        createFile(newFilePath, `module.exports = '${newFileContents}'`)
        expect(existingDirectory(`${path}/${testChallenge}`, `/${testChallenge}.js`)).toBe(true)
    });
    it(`read the correct contents of the file created in ${newFilePath}`, () => {
        expect(require(`../${newFilePath}`)).toBe(newFileContents)
    })
});

//
// describe(``, () => {
//     it(``, () => {
//         expect().toBe()
//     });
// });

afterAll(() => rimraf(`${path}/${testChallenge}`, () => { }));