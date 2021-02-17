
function nSmallestIOO(array, n) {
  const sortedArray = [...array].sort((a, b) => a - b)
  const finalArray = []
  if (sortedArray.length > n) {
    sortedArray.splice(n)
  }

  for (let i = 0; i < array.length; i++) {
    if (sortedArray.includes(array[i])) {
      finalArray.push(array[i])
      if (finalArray.length === n) {
        return finalArray
      }
    }
  }
  return finalArray
 
}

nSmallestIOO([1, 2, 3, 4, 1], 3)

module.exports = {
  nSmallestIOO
}