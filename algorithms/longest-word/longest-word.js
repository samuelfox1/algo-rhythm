// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

const longestWord = function (str) {
    let strArr = str.split(' ')
    let longestCount = 0
    let saveWord
    strArr.forEach(word => {
        let x = word.split('')
        for (let i = 0; i < x.length; i++) {
            if (longestCount < i) {
                saveWord = word
                longestCount = i
            }
        }
    });
    return saveWord
}

module.exports = longestWord