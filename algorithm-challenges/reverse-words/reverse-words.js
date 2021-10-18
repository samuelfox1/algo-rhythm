// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

const reverseWords = (str) => {
    return str.split(' ').reverse().join(' ')
};

module.exports = reverseWords