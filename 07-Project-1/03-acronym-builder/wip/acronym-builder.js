// Write code to create a function that accepts a string and returns an acronym for the given string




// personal approach

// var acronymBuilder = function (str) {
//     str = str.split(' ')

//     let acc = []

//     str.map(x => acc.push(x.substring(0, 1)))

//     return (acc.join('').toUpperCase())
// };



// Tutor instructed approach
var acronymBuilder = function (str) {
    let temp = str.split(' ').reduce(function (accumulator, str) {
        return accumulator + str.charAt(0).toUpperCase()

    }, '')
    console.log(temp)
    return temp
};



// reduce() examplue pulled from MDN Web Docs

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// var temp = array1.reduce((acc, curr) => {
//     return acc + curr
// })
// console.log(temp, "============")

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15