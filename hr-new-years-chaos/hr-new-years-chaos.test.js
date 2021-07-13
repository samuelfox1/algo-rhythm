const { describe, it, expect } = require('@jest/globals')
const numberOfBribes = require('./hr-new-years-chaos')

describe('numberOfBribes', () => {
    it(`should return 'Hello World'`, () => {

        const str = 'Hello World'
        const result = numberOfBribes(str)
        expect(result).toBe(str)
    })
})