'use strict'

function TODOconstruct(title, description, priority, id){
 this.title = title
 this.description = description
 this.priority = priority
 this.id = id
}
const task1 = new TODOconstruct('Read the book', 'amazing book', 3, 1)
const task2 = new TODOconstruct('Wash the dish', 'fuck i have to do it or i\'ll be fucked by watcher', 1, 2)
const task3 = new TODOconstruct('Go for a walk', 'tomorrow maybe will be sunny', 2, 3)
const taskList = [task1, task2, task3]
console.log(taskList)

const prioritySort = (tasks) => [...tasks].sort((a, b) => a.priority - b.priority)
console.log(prioritySort(taskList))

/*const deleteTask = (deleteItem, tasks) => {
 for(let i=tasks.indexOf(deleteItem); i<tasks.length; i++) tasks[i].priority -=1
 return [...tasks].splice(tasks.indexOf(deleteItem), 1)
}
// by title?
console.log(deleteTask(task3, taskList))*/

const deleteFunc = (id, arr) => {
 return prioritySort(arr).filter(item => item.id!=id).map(item => ( Object.assign(item, {priority: item.priority - 1}) ))
}
console.log(deleteFunc(2, taskList))

console.clear() //////////////////////////////////////////////////////////////////////////////////////////// 

// расширяемый калькулятор

function Calculator(){
 this.askStr = function(){return prompt('Через пробелы введите выражение, которое нужно вычислить, в этот импут', '')}
 this.calculate = function(){
  let str = this.askStr()
  let answer
  let arr = str.split(' ')
  switch(arr[1]){
  case '+': answer = +arr[0] + +arr[2] // как превратить строку в оператор?
  break
  case '-': answer = +arr[0] - +arr[2]
  break
  case '*': answer = +arr[0] * +arr[2]
  break
  case ':':
  case '/': answer = +arr[0] / +arr[2]
  }
  console.log(answer)
 }
 this.addMethod = function(callback){
  let strOperator = prompt('Через пробелы введите добавляемую операцию, которое нужно вычислить, в этот импут', '')
  let arr = strOperator.split(' ')
  let a = arr[0]
  let b = arr[2]
  let operator = arr[1]
  a
 }
}

const calc = new Calculator()
//calc.calculate()

//console.clear() //////////////////////////////////////////////////////////////////////////////////////////// 

// realization of stack

function StackObj(){
 this.delete = function(){
  delete this[this.length]
  if(this.length > 3) this.length -= 1
  return this.length
 }
 this.add = function(item){
  this.length += 1
  this[this.length] = item
  return this.length
 }
 this.length = 3
}

const stack = new StackObj()
stack.add('myStringItem')
stack.add(true)
stack.add(9098)
stack.delete()

console.log(stack)

console.clear() //////////////////////////////////////////////////////////////////////////////////////////// 

//Фильтрация уникальных элементов массива
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
const unique = (arr) => {
 return Array.from(new Set(arr))
}
console.log(unique(values))
console.clear() //////////////////////////////////////////////////////////////////////////////////////////// 

// Отфильтруйте анаграммы
let myArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
const aclean = (arr) => {
 let newObj = {}
 for (let i = 0; i<myArray.length; i++){
  let dynamicKey = arr[i].toLowerCase().split('').sort().join('')
  newObj[dynamicKey] = arr[i]
 }
 return Object.values(newObj)
}
console.log(aclean(myArray))

// анаграммы калькулятор


let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250
}
const sumSalaries = (obj) => {
 return Object.values(obj).reduce((prevValue, item) => prevValue + item, 0)
}
console.log(sumSalaries(salaries)) // 650

let user = {
 name: 'John',
 age: 30,
 [Symbol('id')]: 46535745426432
}
const countEntries = (obj) => {
 //Array.from(Object.entries(obj)).length
 return Object.keys(obj).length
}
console.log(countEntries(user))