'use strict'

function ExtendedCalc(){ /// bind

 this.operationsBase = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
 }

 this.calculate = function(str = prompt('Введите бином, который нужно вычислить (ЧЕРЕЗ ПРОБЕЛЫ)', '')){
  let items = str.split(' ')
  console.log(items)
  if(this.operationsBase[items[1]] && !isNaN(items[0]) && !isNaN(items[2])) return this.operationsBase[items[1]](+items[0], +items[2])
  return 0
 }

 this.addMethod = function(name, func){
  if(!(name in this.operationsBase)){ //!(name in this.operationsBase) or !this.operationsBase[name]
   this.operationsBase[name] = func
  }
 }
 
}
const myCalc = new ExtendedCalc()
myCalc.addMethod('*', (a, b) => a * b)
console.log(myCalc.calculate('5 + 7'))
console.log(myCalc.calculate('5 * 7'))