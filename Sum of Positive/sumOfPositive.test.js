
const { expect } = require('@jest/globals')
const { sumOfPositive } = require('./sumOfPositive')

test('return the sum of the positive numbers in the array', () => {
  expect(sumOfPositive([2, 3, -4, -10])).toBe(5)
})

test('return the sum of the positive numbers in the array', () => {
  expect(sumOfPositive([10, 30, 0, -15])).toBe(40)
})