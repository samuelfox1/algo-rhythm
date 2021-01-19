// Write code to add all the numbers in `arr` and return the total


// // Google-FU - most efficient way using the reduce() method

// var sumArray = function (arr) {
//     var sum = arr.reduce((a, b) => {
//         return a + b
//     }, 0)
//     return sum
// };


// what the reduce() method actually does
var sumArray = (arr) => {
    // start at 0
    let a = 0

    for (; 0 < arr.length;) {
        // a = a + arr[0]
        a += arr[0]
        // removes index[0], so index[1] now becomes index[0] for the next round
        arr.shift()
    }
    return a
}