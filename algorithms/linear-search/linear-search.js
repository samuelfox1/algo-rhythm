// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i]
        if (x === target) {
            return i
        }
    }
    return -1
};




// const linearSearch = function (arr, target) {
//     let x = target
//     let counter = 0
//     let found = false

//     arr.forEach(y => {
//         if (x === y) { x = counter, found = true }
//         else { counter++ }
//     })

//     if (found) { return x }
//     return -1
// };

module.exports = linearSearch