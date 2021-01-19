// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
    arr.forEach(x => {
        if (x % 15 === 0) {
            x = 'Fizz Buzz'
        }
        if (x % 5 === 0) {
            x = 'Buzz'
        }
        if (x % 3 === 0) {
            x = 'Fizz'
        }
        console.log(x)
    });
};
