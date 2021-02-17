
function summation(n) {
  if (n === 1) {
    return n
  } else {
    return n + summation(n - 1)
  }
}


module.exports = {
  summation
}