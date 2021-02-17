
function sumOfPositive(numberArray) {
  let total = 0
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      total += numberArray[i]
    }
  }
  return total
}

module.exports = {
  sumOfPositive
}