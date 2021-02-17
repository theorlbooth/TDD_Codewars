
function highestAL(string) {
  const newArray = string.split(' ')
  const numbers = newArray.map(num => {
    return parseInt(num)
  })
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}


module.exports = {
  highestAL
}