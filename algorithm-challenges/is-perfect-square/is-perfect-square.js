// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

const isPerfectSquare = (num) => {

    let i = 0;

    // start at 0, then find each perfect square and compare to num
    // if current square is equal to num, num is a perfect square
    // if current square is greater then num, num is not a perfect square

    while (true) {

        const currentSquare = i * i;
        if (currentSquare === num) {
            return true;
        } else if (currentSquare > num) {
            return false;
        }
        i++;
    }
};

module.exports = isPerfectSquare