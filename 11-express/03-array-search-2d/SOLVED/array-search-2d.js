// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {

    let x = 0


    // for each index of arr, loop through the second array, compare each value to 'X'
    arr.forEach(y => {
        for (let i = 0; i < y.length; i++) {

            let z = y[i]
            if (z === 'X') { x++ }
        }
    });

    return x
};
