
function multiplesOTOF(n) {
  const newArray = []
  for (let i = n - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArray.push(i)
    }
  }
  return [...new Set(newArray)].reduce((a, b) => a + b, 0)
}


module.exports = {
  multiplesOTOF
}