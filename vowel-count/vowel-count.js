// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    if (str === '') { return 0 } // if str is blank, return 0

    let arrOfStr = str.toLowerCase().split('') // convert str into array of letters
    let numOfVowels = 0 // counter 
    for (let i = 0; i < arrOfStr.length; i++) { // loop through array
        let letter = arrOfStr[i]
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') numOfVowels++ // if vowel is found, increast counter
        if (i === arrOfStr.length - 1) return numOfVowels  // on last index, return counter
    }
};
// checkout includes method

module.exports = vowelCount