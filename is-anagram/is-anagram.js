// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

// var isAnagram = function (strA, strB) {

//     strA = strA.replace(/[^\w]/g, '').toLowerCase()
//     strB = strB.replace(/[^\w]/g, '').toLowerCase()

//     if (strA.length !== strB.length) { return false }

//     let arrB = strB.split('')

//     for (let char of strA) {

//         if (!arrB.includes(char)) {
//             return false
//         } else {
//             // console.log(char)
//             // console.log(arrB.indexOf(char))
//             arrB.splice(arrB.indexOf(char), 1)
//         }
//     }

//     return true

// };

var isAnagram = function (strA, strB) {


    strA = strA.replace(/[^\w]/g, '').toLowerCase()
    strB = strB.replace(/[^\w]/g, '').toLowerCase()

    let strC = 'ab,cd.sd/gsdfAD'
    // console.log(strC)

    strC = strC.replace(/[^\w]/g, '').toLowerCase()
    // console.log(strC)

    // console.log(strA)
    // console.log(strB)

    return sortString(strA) === sortString(strB)

};

function sortString(string) {

    // console.log(string.split('').sort())

    return string.split('').sort().join('')
}

module.exports = isAnagram