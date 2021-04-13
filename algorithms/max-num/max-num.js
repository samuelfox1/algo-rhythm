// Write code to return the largest number in the given array

const maxNum = (arr) => {
    let greatestNum = 0 // start at value 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatestNum) greatestNum = arr[i]
    }
    return greatestNum
};

module.exports = maxNum