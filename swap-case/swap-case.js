// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
    let x = str.toLowerCase().split('')
    let y = str.split('')
    var z = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] === y[i]) { z.push(x[i].toUpperCase()) }
        else { z.push(x[i]) }
    }
    return z.join('')
};

module.exports = swapCase
