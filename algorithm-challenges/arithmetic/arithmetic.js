
const doMath = (num1, op, num2) => {
    const validNum1 = validateNum(num1)
    const validNum2 = validateNum(num2)
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

const validateNum = (num) => {
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