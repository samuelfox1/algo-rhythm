// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

// 114333877


var lookAndSay = function (n) {
    let chars = (n + ' ').split('')
    let lastChar = chars[0]
    let index = ''
    let count = 0

    chars.forEach(nextChar => {
        if (nextChar === lastChar) {
            count++
        } else {
            index += (count + '') + lastChar;
            lastChar = nextChar;
            count = 1
        }
    });

    return parseInt(index)

};

//    when given '11  4  333  8   77'
// should return '21  14 33   18  27' 
// should return '10' when given '0'

//    when given '  9    11      222     7      3'
// should return '1-9  2-1     3-2     1-7    1-3'