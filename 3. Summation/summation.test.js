const { test, expect } = require('@jest/globals')
const { summation } = require('./summation')


test('Given number n, sum every number from 1 to n', () => {
  expect(summation(8)).toBe(36)
})

test('Given number n, sum every number from 1 to n', () => {
  expect(summation(40)).toBe(820)
})