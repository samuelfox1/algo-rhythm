const {
    existsSync,
    mkdirSync,
    writeFileSync } = require('fs')
module.exports = {
    existingDirectory: (path, name) => {
        return existsSync(`${path}/${name}`)
    },
    createDirectory: (path, name) => {
        mkdirSync(`${path}/${name}`)
    },
    createFile: (pathname, contents) => {
        writeFileSync(pathname, contents)

    },
}