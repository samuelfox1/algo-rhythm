// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

const multiplyInto20 = (arr) => {
    // declare a constiable to toggle true if the conditions are met.
    // can not return true from inside the nested loop, scoping issue.
    let status = false
    arr.map(num => {
        for (let i = 0; i < arr.length; i++) {
            let quotient = num * arr[i]
            if (quotient === 20) { status = true }
        }
    })
    return status
};

module.exports = multiplyInto20