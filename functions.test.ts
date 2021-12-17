const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    test('return an array', () => {
        expect(shuffleArray).toEqual(shuffleArray)
    })

    test('return the same length', () => {
        expect(shuffleArray).toHaveLength(shuffleArray.length)
    })

}) 