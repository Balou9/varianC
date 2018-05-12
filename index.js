function sum (arr) {
  var result = 0
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

function mean (arr) {
  return sum(arr) / arr.length
}

function varianC (arr) {
  var vari = arr.map(function (each) {
    return Math.pow(each - mean(arr), 2)
  })
  return sum(vari) / arr.length
}

module.exports = varianC
