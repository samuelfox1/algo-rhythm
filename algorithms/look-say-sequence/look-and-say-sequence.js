// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence


const lookAndSay = (n) => {
    // add a space to the end of 'n', this will convert n to a string with a space on the end of it. Then split the string up, this will result in an array of all numbers, plus a blank space as the last index.
    const numArr = (n + ' ').split('')

    // declare 'currentNum' as the first index. 'currentNum' will be used in a loop to compare to the following index, to count how many of the same number occur in a row.
    let currentNum = numArr[0]

    // start a counter at 0
    let counter = 0

    // declare newNum as the container to save our new lookAndSay number as it is built.
    let newNum = ''

    // for each index of 'numArr', compare the index to the currentNum.
    // if the index matches, increment the counter for the loop.
    // if the index does not match, concatenate the 'counter' and 'currentNum' onto 'newNum', reset the counter to 1.
    numArr.forEach(idx => {
        if (idx === currentNum) {
            counter++
        } else {
            newNum += counter + currentNum;
            currentNum = idx;
            counter = 1
        }
    });
    return parseInt(newNum)

};

module.exports = lookAndSay