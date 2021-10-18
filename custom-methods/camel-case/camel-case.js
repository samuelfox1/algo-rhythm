// Write code to create a function that accepts a string and returns the string in camelCase

// Example: should return 'helloWorld' when given the string 'Hello World'

const camelCase = (str) => {
    if (typeof str != 'string') return 'invalid datatype'
    if (str.length === 0) return 'invalid string'
    let sanitized = str
    const charsToReplace = ['-', '_']

    charsToReplace.map(char => sanitized = sanitized.split(char).join(' '))

    return sanitized.toLowerCase()
        .split(' ')
        .map((word, i) => i > 0 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
        .join('')
};

module.exports = camelCase