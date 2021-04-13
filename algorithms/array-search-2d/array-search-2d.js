// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = (arr) => {

    let numberOfXs = 0

    // for each index of arr, loop through the second array, compare each value to 'X'
    arr.forEach(arr2 => {
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === 'X') { numberOfXs++ }
        }
    });

    return numberOfXs
};

module.exports = arraySearch2D