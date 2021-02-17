const { test, expect } = require('@jest/globals')
const { multiplesOTOF } = require('./multiplesOfThreeOrFive')

test('Given a number n, return the sum of the multiples of 3 or 5 less than n', () => {
  expect(multiplesOTOF(10)).toBe(23)
})

test('Given a number n, return the sum of the multiples of 3 or 5 less than n', () => {
  expect(multiplesOTOF(15)).toBe(45)
})