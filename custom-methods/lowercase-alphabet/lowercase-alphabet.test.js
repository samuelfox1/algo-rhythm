const { describe, it, expect, toBe, beforeAll, afterAll } = require('@jest/globals')
const lowercaseAlphabet = require('./lowercase-alphabet')
const sinon = require('sinon')

// beforeEach(function () {
//     sinon.spy(String.prototype, "fromCharCode");
// });

// afterEach(function () {
//     String.prototype.fromCharCode.restore()
// })

describe('lowercaseAlphabet', () => {
    it('should return a string of lowercase letters a-z constructed with the fromCharCode method', () => {
        const abcs = 'abcdefghijklmnopqrstuvwxyz'
        expect(lowercaseAlphabet()).toBe(abcs)
    })
})
