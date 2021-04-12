// Write code to create a function that returns the factorial of `num`
// factorial: the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24. Factorial zero is equal to 1 

var factorial = function (num) {
    let x = 1 // start 
    for (let i = 1; i <= num; i++)  x = x * i // start at 1 and work up to num, multiplying new product each time.
    return (x)
};

module.exports = factorial