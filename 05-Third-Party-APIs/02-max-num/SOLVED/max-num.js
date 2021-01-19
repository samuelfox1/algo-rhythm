// Write code to return the largest number in the given array

var maxNum = function (arr) {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            x = arr[i]
        }
    }
    return x
};
