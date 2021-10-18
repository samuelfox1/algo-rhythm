// Write code to add all the numbers in `arr` and return the total


// // Google-FU - most efficient way using the reduce() method

// const sumArray = function (arr) {
//     const sum = arr.reduce((a, b) => {
//         return a + b
//     }, 0)
//     return sum
// };


// what the reduce() method actually does
const sumArray = (arr) => {
    // start at 0
    let sumOfArr = 0

    arr.forEach(num => { sumOfArr += num }) // add each value to sumofArr

    return sumOfArr
}

module.exports = sumArray