// Write code to create a function that takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    let sentence = [] // container for output sentence
    str.split(' ').forEach(word => { // split input sentence into array of words
        let letters = word.split('') // split word into array of letters
        letters[0] = letters[0].toUpperCase() // set first letter to uppercase
        word = letters.join('') // lin letters back into word
        sentence.push(word) // add word to output sentence
    });
    return sentence.join(' ') // return joined array back into string, adding a space between each word
};


//checkout substring function

module.exports = titleCase