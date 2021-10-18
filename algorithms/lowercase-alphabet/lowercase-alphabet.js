//return a string of lowercase letters a-z constructed with the useCharCode method

const lowercaseAlphabet = (str = '') => {
    return str.length === 26
        ? str
        : lowercaseAlphabet(str + String.fromCharCode(str.length + 97))
}

module.exports = lowercaseAlphabet