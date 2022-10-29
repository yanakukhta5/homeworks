'use strict'

// Сумма с помощью замыканий
const sum = (a) => {
 return function(b){
  console.log(a+b)
  return a + b
 }
}
sum(42)(10)

//Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7]
const inBetween = (a, b) => {
 return item => item > a && item < b
}
const inArray = (arr) => {
 return item => arr.includes(item)
}
console.log(arr.filter(inBetween(1, 6)))
console.log(arr.filter(inArray([12, 67, 2])))

// Сортировать по полю
let users = [
 { name: "Pete", age: 18, surname: "Peterson" },
 { name: "Ann", age: 19, surname: "Hathaway" },
 { name: "John", age: 20, surname: "Johnson" },
]
function byField(str){
 return (itemA, itemB) => itemA[str] > itemB[str] ? 1 : -1 // ---
}
console.log(users.sort(byField('name')))

