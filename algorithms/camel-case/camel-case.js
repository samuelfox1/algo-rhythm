// Write code to create a function that accepts a string and returns the string in camelCase

// Example: should return 'helloWorld' when given the string 'Hello World'

const camelCase = (str) => {
    if (typeof str != 'string') return 'invalid datatype'
    if (str.length === 0) return 'invalid string'
    let lowercase = str.toLowerCase().split(' '); // set str to lowercase then split into an array
    let camelCase = lowercase[0]; // initialize with first word

    for (let i = 1; i < lowercase.length; i++) { // start loop at second word
        const capitalFirstLetter = lowercase[i].charAt(0).toUpperCase() // capitalize first letter
        const wordBody = lowercase[i].substring(1) // word minus first letter
        camelCase += capitalFirstLetter + wordBody // add formatted word to camelCase string
    };
    return camelCase
};

module.exports = camelCase