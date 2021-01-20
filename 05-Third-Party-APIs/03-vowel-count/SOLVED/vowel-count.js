// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    let x = str.toLowerCase().split('')
    let y = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') { y++ }
        if (i === x.length - 1) { return y }
    }
    if (str === '') { return y }
};


// checkout includes method