// вычисление факториала и декораторы для него
let myFunction = function factorial(n){
 return n == 1 ? n : n * factorial(n-1)
}

let myFuncDecorator = function(f){
 return function wrapper(){
     let result = f.apply(this, arguments)
     console.log(`The ${f.name} of ${arguments[0]} is ${result}`)
     return result
 }
}
myFunction = myFuncDecorator(myFunction)

let myCallCounter = function(f){
 f.callsCount = 0
 return function wrapper(){
     result = f.apply(this, arguments)
     f.callsCount = f.callsCount + 1
     console.log(`The function ${f.name} was called ${f.callsCount} times`)
     return result
 }
}
myFunction = myCallCounter(myFunction)

let timeConsumingDecorator = function(f){
 return function wrapper(){
     let start = new Date()
     result = f.apply(this, arguments)
     let end = new Date()
     console.log(`Function worked in ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)
     return result
 }
}
myFunction = timeConsumingDecorator(myFunction)

let cacheDecorator = function(f){
   let cache = {}
   return function(n){
   if(cache[n] === 'undefined') cache = f.apply(this, arguments)
       return cache[n]
   }
}
myFunction = cacheDecorator(myFunction)

myFunction(2000)
myFunction(2000)