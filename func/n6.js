'use strict'

const sum_ = (a) => {
  return function (b) {
    console.log(a+b)
    return sum(a+b)
  }
}
//sum_(6)(2)(7)

/*const sum = (a) => {
  f.toString = function(){ return sum.sum }
  function f(b) {
    return sum.sum += b
  }
  return f
}
console.log(typeof sum(8)(9) )
console.log(sum(8)(9) )
