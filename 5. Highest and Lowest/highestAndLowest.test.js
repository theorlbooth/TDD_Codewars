const { test, expect } = require('@jest/globals')
const { highestAL } = require('./highestAndLowest')


test('Given a string of space seperated numbers, return the highest and the lowest', () => {
  expect(highestAL('1 2 3 4 5')).toBe('5 1')
})

test('Given a string of space seperated numbers, return the highest and the lowest', () => {
  expect(highestAL('1 9 3 4 -5')).toBe('9 -5')
})