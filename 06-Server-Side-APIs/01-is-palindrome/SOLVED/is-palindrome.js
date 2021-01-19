// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
    let x = str.toLowerCase()
    let y = x.split('').reverse().join('')
    if (x === y) { return true } else { return false }
};
