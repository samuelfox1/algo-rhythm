// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

// 114333877


var lookAndSay = function (n) {
    // add a space to the end of 'n', this will convert n to a string with a space on the end of it. Then split the string up, this will result in an array of all numbers, plus a blank space as the last index.
    const numArr = (n + ' ').split('')

    // declare 'currentNum' as the first index. 'currentNum' will be used in a loop to compare to the following index, to count how many of the same number occur in a row.
    var currentNum = numArr[0]

    // start a counter at 0
    var counter = 0

    // declare newNum as the container to save our new lookAndSay number as it is built.
    var newNum = ''

    // for each index of 'numArr', compare the index to the currentNum.
    // if the index matches, increment the counter for the loop.
    // if the index does not match, concatenate the 'counter' and 'currentNum' onto 'newNum', reset the counter to 1.
    numArr.forEach(index => {
        if (index === currentNum) {
            counter++
        } else {
            newNum += counter + currentNum;
            currentNum = index;
            counter = 1
        }
    });
    console.log(newNum)
    return parseInt(newNum)

};

//    when given ' 11  4  333  8   77'
// should return '21  14 33   18  27' 


// should return '10' when given '0'

//    when given '  9    11      222     7      3'
// should return '1-9  2-1     3-2     1-7    1-3'