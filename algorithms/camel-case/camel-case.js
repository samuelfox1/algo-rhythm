// Write code to create a function that accepts a string and returns the string in camelCase


// set str to lowercase then split into an array
// declare new constiable containing first word
// loop through the remaining words and set the first letter to uppercase
// add each word to constiable containing first word
// return constiable containing all words now in camel case

const camelCase = (str) => {
    let x = str.toLowerCase().split(' ');
    let y = x[0];

    for (let i = 1; i < x.length; i++) {
        let xx = x[i]
        let z = xx.split('')
        z[0] = z[0].toUpperCase()
        y += z.join('')
    };
    // console.log(y)
    return y
};

module.exports = camelCase