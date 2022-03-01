const { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } = require('fs')
const camelCase = require('./custom-methods/camel-case/camel-case')


const readFoldersToReplace = (path) => {
    return readdirSync(path, { withFileTypes: true })
        .filter(({ name }) => {
            if (name.indexOf('.') !== -1) return false
            return true
        })
        .map(({ name }) => {
            return {
                dir: name,
                subFolders: readdirSync(`./${name}`).filter((name) => name.indexOf('.') === -1),
                files: readdirSync(`./${name}`).filter((name) => name.indexOf('.') !== -1)

            }
        })
}

const readFilesToReplace = (path) => readdirSync(path)


const addFolderIfNeeded = (path) => {
    try {
        readdirSync(path)
    } catch (error) {
        mkdirSync(path)
    }
}

const updateFilePaths = (string, fileName, i = 0) => {
    if (string.indexOf(fileName) === -1) return string
    const replaced = string.replace(fileName, camelCase(fileName))

    return updateFilePaths(replaced, fileName, i + 1)
}

const addFilesToFolder = (files, dir, formattedDir) => {
    files.map(fileName => {
        const data = readFileSync(`./${dir}/${fileName}`, { encoding: 'utf8' })
        const updated = updateFilePaths(data, fileName.split('.')[0])
        addFolderIfNeeded(`./${formattedDir}`)
        writeFileSync(`./${formattedDir}/${camelCase(fileName)}`, updated)
        rmSync(`./${dir}/${fileName}`, { recursive: true, force: true });
    })
}

readFoldersToReplace('./')
    .map(({ dir, subFolders, files }, i) => {
        const formattedDirName = camelCase(dir)

        if (dir.indexOf('-') !== -1) {
            addFolderIfNeeded(`./${formattedDirName}`)
            addFilesToFolder(files, dir, formattedDirName)

            subFolders.map(folder => {
                const formattedFolderName = camelCase(folder)
                const sourcePath = `./${dir}/${folder}`
                const destinationPath = `./${formattedDirName}/${formattedFolderName}`
                addFolderIfNeeded(`./${formattedDirName}/${formattedFolderName}`)
                const subArr = readFoldersToReplace(sourcePath)
                if (!subArr.length) {
                    const files = readFilesToReplace(sourcePath)
                    if (files.length) {
                        addFilesToFolder(files, sourcePath, destinationPath)
                    }
                }
            })
            rmSync(dir, { recursive: true, force: true });
        }
    })