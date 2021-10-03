// Write code to create a function that accepts an array of numbers
// Return `true` is no number appears in the array more than once, else return `false`

module.exports = {
    isUnique: (arr) => {
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i]
            if (obj[key]) return false  // if key already exists, return false
            obj[key] = 1 // add key to obj with value of 1 to obj
        }
        return true
    }
}