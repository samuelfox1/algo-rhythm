// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

const zeroesAndOnes = (str) => {
    str = str.split('')
    let ones = 0
    let zeros = 0
    str.map(num => {
        if (num === '1') ones++
        else if (num === '0') zeros++
    })
    return ones === zeros
};

module.exports = zeroesAndOnes