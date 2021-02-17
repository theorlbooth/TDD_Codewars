
const { test, expect } = require('@jest/globals')
const { removeFAL } = require('./removeFirstAndLastChar')

test('Remove first and last character', () => {
  expect(removeFAL('hello')).toBe('ell')
})

test('Remove first and last character', () => {
  expect(removeFAL('hello, my name is Theo')).toBe('ello, my name is The')
})