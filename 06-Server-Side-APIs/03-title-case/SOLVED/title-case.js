// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    let sentence = []
    let x = str.split(' ').forEach(word => {
        let letters = word.split('')
        letters[0] = letters[0].toUpperCase()
        word = letters.join('')
        sentence.push(word)
    });
    return sentence.join(' ')
};


//checkout substring function