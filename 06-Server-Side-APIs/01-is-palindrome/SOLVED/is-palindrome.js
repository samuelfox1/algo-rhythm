// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
    let x = str.toLowerCase() // format letters to lowercase
    let y = x.split('').reverse().join('') // reverse the letters
    return x === y // returns true or false 
};
