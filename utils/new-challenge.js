const {
    existsSync,
    mkdirSync,
    readdirSync,
    writeFileSync } = require('fs');

const getDirectories = source => {
    return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
}

const errMessage = (name) => `${name} alread in use`;

const jsFileContent = (name, description) => {
    const formatName = name.split('-').map((word, i) => i > 0 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
    return `//${description}

const ${formatName.join('')}=()=>{}`
};

const testFileContent = (contents) => `const { describe, it, expect, toBe, beforeAll, afterAll } = require('@jest/globals')`;

const createNewAlgo = function (path, name, description) {
    const dirPath = `${path}/${name}`;
    const jsFilePath = `${dirPath}/${name}.js`;
    const testFilePath = `${dirPath}/${name}.test.js`;

    if (existsSync(dirPath)) return `${errMessage(name)}`;
    mkdirSync(dirPath);
    writeFileSync(jsFilePath, `${jsFileContent(name, description)}`);
    writeFileSync(testFilePath, `${testFileContent(name)}`);
};

module.exports = {
    errMessage,
    createNewAlgo,
    jsFileContent,
    testFileContent,
    getDirectories
};