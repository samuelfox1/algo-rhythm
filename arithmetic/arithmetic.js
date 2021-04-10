
var doMath = function (num1, op, num2) {
    const validNum1 = validateIsNum(num1)
    const validNum2 = validateIsNum(num2)
    const validOp = validateOperator(op)
    if (!validNum1 || !validNum2) return 'invalid number'
    if (!validOp) return 'invalid operator'
    if (op === '+') return num1 + num2
    if (op === '-') return num1 - num2
    if (op === '*') return num1 * num2
    if (op === '**') return num1 ** num2
    if (op === '/') return num1 / num2
    if (op === '%') return num1 % num2
};

const validateIsNum = (num) => {
    if (typeof num != 'number') return false
    return num
}

const validateOperator = (op) => {
    const possibleOperators = ['+', '-', '*', '**', '/', '%']
    const indexOfOp = possibleOperators.indexOf(op)
    if (indexOfOp > -1) return op
    return false
}

module.exports = doMath