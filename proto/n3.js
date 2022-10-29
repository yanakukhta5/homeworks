// Добавить функциям метод "f.defer(ms)"
function myFunction(){
 alert('Hello!')
}
Function.prototype.defer = function(delay){
 setTimeout(this, delay) // this???????????????
}
myFunction.defer(3000)

// Добавьте функциям декорирующий метод "defer()"
function sum(a, b){
 return a + b
}
Function.prototype.defer = function(delay){
 return function(func, a, b){
  setTimeout(func, delay)
 }
}

const sumAfter3Sec = sum.defer(3000)
console.log(sumAfter3Sec(2, 3))