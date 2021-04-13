// Write code to create a function that accepts a string and returns an acronym for the given string

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const acronymBuilder = (str) => {
    if (typeof str != 'string') return 'invalid datatype, expected a string'
    if (!str) return 'invalid string, can not be empty'
    let acronym = str.split(' ').reduce((accumulator, str) => { // split into array and reduce into uppercase first letters only
        return accumulator + str.charAt(0).toUpperCase()
    }, '')

    return acronym
};

module.exports = acronymBuilder