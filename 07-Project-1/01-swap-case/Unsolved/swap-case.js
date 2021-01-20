// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
    const swapped = []
    let lowerCase = str.toLowerCase().split('')
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === str.split('')[i]) {
            swapped.push(lowerCase[i].toUpperCase())
        } else {
            swapped.push(lowerCase[i])
        }
    }
    return swapped.join('')
};
