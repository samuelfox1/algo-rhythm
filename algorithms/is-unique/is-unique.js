// Write code to create a function that accepts an array of numbers
// Return `true` is no number appears in the array more than once, else return `false`

const isUnique = (arr) => {
    let x = {}
    for (let i = 0; i < arr.length; i++) {
        let y = arr[i]
        // if y already exists in object x, return false
        if (x[y]) { return false }
        // add key of y with value of true to object x
        x[y] = true
    }
    return true
};
module.exports = isUnique