const { test, expect } = require('@jest/globals')
const { nSmallestIOO } = require('./nSmallestInOriginalOrder')

test('Given an array of integers and a number n. Extract the n smallest elements preserving their original order', () => {
  expect(nSmallestIOO([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3])
})

test('Given an array of integers and a number n. Extract the n smallest elements preserving their original order', () => {
  expect(nSmallestIOO([5, 4, 3, 2, 1], 3)).toStrictEqual([3, 2, 1])
})

test('Given an array of integers and a number n. Extract the n smallest elements preserving their original order', () => {
  expect(nSmallestIOO([1, 2, 4, 1, 2], 3)).toStrictEqual([1, 2, 1])
})