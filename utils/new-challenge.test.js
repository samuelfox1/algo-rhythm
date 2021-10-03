const { describe, it, expect, toBe, afterAll } = require(`@jest/globals`)
const rimraf = require('rimraf')
const { createNewAlgo, errMessage, jsFileContent, testFileContent } = require(`./new-challenge`)
const { existsSync, writeFileSync } = require('fs')

const testDir = `./test-folder`;
const newAlgoName = `test-challenge`;
const existingAlgoName = 'fizz-buzz';

describe('errorMessage', () => {
    it('should return a custom error message', () => {
        expect(errMessage(existingAlgoName)).toBe(`${existingAlgoName} alread in use`);
    });
});

describe(`createNewAlgo`, () => {
    it(`shoud return custom error message if new algo name exists`, () => {
        expect(createNewAlgo(testDir, existingAlgoName)).toBe(errMessage(existingAlgoName));
    });

    it(`should create a new algo folder `, () => {
        createNewAlgo(testDir, newAlgoName)
        expect(existsSync(`${testDir}/${newAlgoName}/${newAlgoName}.js`)).toBe(true);
    });

    it(`should create a new .js file in the new algo folder`, () => {
        expect(existsSync(`${testDir}/${newAlgoName}/${newAlgoName}.js`)).toBe(true);
    });

    it(`read the correct contents of the new .js file`, () => {
        const filePath = `../${testDir}/${newAlgoName}/${newAlgoName}.js`;
        expect(require(filePath)).toBe(jsFileContent(newAlgoName));
    });

    it(`should create a new .test.js file in the new algo folder`, () => {
        expect(existsSync(`${testDir}/${newAlgoName}/${newAlgoName}.test.js`)).toBe(true);
    });

    it(`read the correct contents of the new .test.js file`, () => {
        const filePath = `../${testDir}/${newAlgoName}/${newAlgoName}.test.js`;
        expect(require(filePath)).toBe(testFileContent(newAlgoName));
    });
});

afterAll(() => rimraf(`${testDir}/${newAlgoName}`, () => { }));