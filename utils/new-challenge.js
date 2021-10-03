const {
    existsSync,
    mkdirSync,
    writeFileSync } = require('fs');

const errMessage = (name) => `${name} alread in use`;

const jsFileContent = (name, description) => {
    const formatName = name.split('-').map((word, i) => {
        if (i > 0) {
            let newWord = word[0].toUpperCase()
            newWord += word.substring(1)
            return newWord
        }
        return word
    })
    return `//${description}

const ${formatName.join('')}=()=>{}`
};

const testFileContent = (contents) => `//hello from ${contents}.test.js`;

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