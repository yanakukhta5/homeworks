"use strict"
const camelize = (str) => {
 str = str.split('-').map((item, index) => index !==0 ? item[0].toUpperCase() + item.slice(1) : item.slice(0)).join('')
 console.log(str)
}
camelize('bottom-text')

const filterRange = (arr, a, b) => {
 let newArr = arr.filter(item => item >= a && item <= b) //tf =
 console.log(newArr)
}
let myArr = [5, 3, 8, 1]
filterRange(myArr, 0, 1)

myArr = [5, 3, 8, 1, 9, 10, 23, 76, 23, 89, 9, 0, 100, 111, 127, 130, 400]
const filterRangeInPlace = (arr, a, b) => {
 arr.sort(item => item >= a && item <= b) /////////
 console.log(arr)
}
filterRange(myArr, 100, 130)

// Сортировать в порядке по убыванию
const reverseBibbleFunc = (myArr) =>{
 myArr.sort((a, b) => a-b).reverse()
 console.log(myArr)
}
myArr = [5, 2, 1, -10, 8]
reverseBibbleFunc(myArr)

const copySorted = (arr) => {
 arr.sort()//(a, b) => a.locateCompare(b)
 console.log(arr)
}
myArr = ["HTML", "JavaScript", "CSS"]
copySorted(myArr)

// связанный список
// создать расширяемый калькулятор

console.clear()

let user1 = {name: 'Yana', age: 18}
let user2 = {name: 'Andrew', age: 17}
let user3 = {name: 'anon', age: 19}
let users = [user1, user2, user3] 
let names = users.map(user => user.name)
console.log(names)

user1 = {name: 'Yana', surname: 'Kukhta', userID: 1}
user2 = {name: 'Andrew', surname: 'Letuchi', userID: 2}
let newUsers = [user1, user2] // надо перезаписывать
let usersMapped = newUsers.map(user => ({fullName: user.name + ' ' + user.surname, id: user.userID}) ) // выражение возвращиемого объекта в скобках 
// let usersMapped = newUsers.map(user => {return{fullName: user.name + ' ' + user.surname, id: user.userID}} )
console.log(usersMapped)

const sortByAge = (arr) => {
 arr.sort((a, b) => a.age - b.age)
 return 5
}
console.log(users)
console.log(sortByAge(users))

//const shuffle = (arr) => {}

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }
let arr = [ vasya, petya, masha ]
const getAverageAge = (arr) => {
 let sum=0
 for(let i=0; i<arr.length; i++) sum += arr[i].age
 return sum/arr.length
}
console.log(getAverageAge(arr))

const getAverageAgeReduce = (arr) => {
 return arr.reduce((prev, current) => prev + ' ' + current.name, '') //prev.age
}
console.log(getAverageAgeReduce(arr))

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]
const uniqe = (arr) => {
 let newArr = []
 for(let string of arr)
  //if(!newArr.includes(string))
  if(!newArr.some(uniqeString => string == uniqeString))
   newArr.push(string)
 return newArr
}

const uniqe2 = (arr) => new Set(arr)
let newArr = Array.from(uniqe2(strings))
console.log(newArr)

//console.log(uniqe(strings))