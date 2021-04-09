const { describe, expect, it } = require('@jest/globals')
const pairsOfSocks = require('./pairs-of-socks')

describe('pairsOfSocks', () => {
    it("should return 3 when given the array [10, 20, 20, 10, 10, 30, 50, 10, 20]", () => {
        const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
        const result = pairsOfSocks(arr);
        expect(result).toBe(3);
    });
    it("should return 4 when given the array [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]", () => {
        const arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
        const result = pairsOfSocks(arr);
        expect(result).toBe(4);
    });
    it("should return 1 when given the array [1,1]", () => {
        const arr = [1, 1]
        const result = pairsOfSocks(arr)
        expect(result).toBe(1)
    })
    it("should return null when given array [1]", () => {
        const arr = [1]
        const result = pairsOfSocks(arr)
        expect(result).toBe(null)
    })
    it("should return null when given a string 'testing'", () => {
        const string = 'testing'
        const result = pairsOfSocks(string)
        expect(result).toBe(null)
    })

})