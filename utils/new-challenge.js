const {
    existsSync,
    mkdirSync,
    readdirSync,
    writeFileSync } = require('fs');
const camelCase = require('../custom-methods/camel-case/camel-case');

const getDirectories = source => {
    return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
}

const errMessage = (name) => `${name} alread in use`;

const jsFileContent = (name, description) => {
    return `//${description}

const ${camelCase(name)}=()=>{}

module.exports = ${camelCase(name)}`
};

const testFileContent = (name, description) => `const { describe, it, expect, toBe, beforeAll, afterAll } = require('@jest/globals')
const ${camelCase(name)} = require('./${name}')

describe('${name}', () => {
    it('should ${description}', () => {

    })
})
`;

const createNewAlgo = function (path, name, description) {
    const dirPath = `${path}/${name}`;
    const jsFilePath = `${dirPath}/${name}.js`;
    const testFilePath = `${dirPath}/${name}.test.js`;

    if (existsSync(dirPath)) return `${errMessage(name)}`;
    mkdirSync(dirPath);
    writeFileSync(jsFilePath, `${jsFileContent(name, description)}`);
    writeFileSync(testFilePath, `${testFileContent(name, description)}`);
};

module.exports = {
    errMessage,
    createNewAlgo,
    jsFileContent,
    testFileContent,
    getDirectories
};