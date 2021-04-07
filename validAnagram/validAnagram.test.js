const { describe, it, expect, toBe } = require('@jest/globals')
const validAnagram = require('./validAnagram')

describe('validAnagram', () => {
    it('should return true when given empty strings', () => {
        const string1 = ""
        const string2 = ""
        const result = validAnagram(string1, string2)
        expect(validAnagram(result)).toBe(true)
    })
})