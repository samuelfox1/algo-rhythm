// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
    arr.sort((a, b) => {
        if (a > b) { return 1 }
        else if (a === b) { return 0 }
        else if (a < b) { return -1 }
    })
    return arr[arr.length - 1] * arr[arr.length - 2]
};
