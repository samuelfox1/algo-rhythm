// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function (num) {
    // for (let i = num; i >= 1; i--) { console.log(i) }

    // - or -

    while (num > 0) {
        console.log(num)
        num--
    }
};

module.exports = countdown