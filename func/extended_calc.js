'use strict'

function ExtendedCalc(){ /// bind
 let operationsArr = ['+', '-']
 let str = prompt('Введите бином, который нужно вычислить (ЧЕРЕЗ ПРОБЕЛЫ)', '')
 let arrOperands = str.split(' ')
 let result
 this.calculate = function(){
 if(!isNaN(+arrOperands[0]) && !isNaN(+arrOperands[2]) && operationsArr.includes(arrOperands[1]))
  switch(arrOperands[1]){
   case '+': result = +arrOperands[0] + +arrOperands[2]
   break
   case '-': result = +arrOperands[0] - +arrOperands[2]
   break
  }
  else{
   console.log('Вы что-то неправильно ввели или такого метода нет в калькуляторе, результатом будет 0')
  }
  if(result) return result
  return 0
 }
 this.addMethod = function(name, func){
  if(!operationsArr.includes(name)){
   operationsArr.push(name)
   result = func(arrOperands[0], arrOperands[2])
  }
  if(result) return result
  return 0
 }
}

const myCalc = new ExtendedCalc()
myCalc.addMethod('*', (a, b) => a * b)
console.log(myCalc.calculate())