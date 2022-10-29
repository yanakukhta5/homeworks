'use strict'

const sumTo = (n) => {
 if(n===1) return 1
 else return n+sumTo(n-1)

 /*let result = 0 // = 0
 //for(let i=1; i<=n; i++) result +=i // n+=n result
 return result*/

 //return result = ((1+n)/2)*n
}
console.log(sumTo(5))

const factorial = (n) => {
 return n===1 ? n : n*factorial(n-1) // falthy??
}
console.log(factorial(5))

function fib(n){ // declaration let const   Fn = Fn-1 + Fn-2
 return n <=1 ? n : fib(n-1)+fib(n-2) // <=1 == 
}
console.log(fib(7))

const fib_ = function(n){
 let a = 1
 let b = 1
 for(let i=3; i<=n; i++){
  let c = a + b
  a = b
  b = c
 }
 return b
}
console.log(fib_(7))

const list = {
 value: 1, 
 next: {
  value: 2,
  next: {
   value: 3,
   next: {
    value: 4,
    next: {
     value: 5,
     next: null
 }}}}}

//Вывод односвязного списка
const printListRec = (list) => {
  if(list.next) printListRec(list.next)
  console.log(list.value)
}
printListRec(list)

const printListCik = (list) => {
  let n = list.next
  let arr  = [list.value]
  while(n){
    arr.push(n.value)
    n = n.next
  }
  console.log(...arr.reverse())
}
printListCik(list)

