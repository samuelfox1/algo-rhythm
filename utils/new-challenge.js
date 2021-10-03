const {
    existsSync,
    mkdirSync,
    writeFileSync } = require('fs');

const errMessage = (name) => `${name} alread in use`;

const jsFileContent = (name, description) => `
//${description}

const ${name}=()=>{}
`;

const testFileContent = (contents) => `hello from ${contents}.test.js`;

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
    testFileContent
};