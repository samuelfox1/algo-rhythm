// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        // ON FIRST LOOP
        // save arr[0] data
        // overwrite arr[0] with data from last index
        // overwrite last index with saved dats from arr[0]

        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
};

module.exports = reverseInPlace