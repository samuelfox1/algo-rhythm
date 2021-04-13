// Write code to create a function that accepts a string and returns an acronym for the given string

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const acronymBuilder = (str) => {
    let temp = str.split(' ').reduce((accumulator, str) => {
        return accumulator + str.charAt(0).toUpperCase()
    }, '')
    return temp
};

module.exports = acronymBuilder