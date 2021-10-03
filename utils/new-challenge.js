const {
    existsSync,
    mkdirSync,
    writeFileSync } = require('fs');

const errMessage = (name) => `${name} alread in use`;

const jsFileContent = (contents) => `hello from ${contents}.js`;
const testFileContent = (contents) => `hello from ${contents}.test.js`;

const createNewAlgo = function (path, name) {
    const dirPath = `${path}/${name}`;
    const jsFilePath = `${dirPath}/${name}.js`;
    const testFilePath = `${dirPath}/${name}.test.js`;

    if (existsSync(dirPath)) return `${errMessage(name)}`;
    mkdirSync(dirPath);
    writeFileSync(jsFilePath, `module.exports = '${jsFileContent(name)}'`);
    writeFileSync(testFilePath, `module.exports = '${testFileContent(name)}'`);
};

module.exports = {
    errMessage,
    createNewAlgo,
    jsFileContent,
    testFileContent
};