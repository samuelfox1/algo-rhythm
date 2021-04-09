// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.


// isNan means 'is not a number' !isNan means is not - not a number

var isNumeric = function (str) {
    if (str === '') { return false }
    return !isNaN(str)
};

module.exports = isNumeric