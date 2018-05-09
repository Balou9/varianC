var tape = require('tape')
var varianC = require('./index')
var arr = [229, 349, 128, 231, 891, 542, 224, 667, 984, 255, 657]
var vari = varianC(arr)

tape('Output is true', function (t) {
  t.ok(vari, 'Should be truthy.'),
  t.end()
})
