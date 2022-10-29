'use strict'

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// My map() realization
function myMap(callback, arr){
 let resultArr = new Array()
 for(let i = 0; i < arr.length; i++){
 // arr[i].__proto__.callback = callback 
  resultArr.push(arr[i].callback(arr[i]))
 // delete arr[i].__proto__.callback
}
 return resultArr
}
function myCallbackForMap(i){
 return i * 3
}
console.log(myMap(myCallbackForMap, myArr))

//  My filter() realization

function myCallbackForFilter(i){
 if( i > 3 ) return i
}
console.log(myMap(myCallbackForFilter, myArr))

// My some() realization
function myCallbackForSome(i, a){
 if (i = 4) return true
}
console.log(myMap(myCallbackForSome, myArr))

// My every() realization
function myCallbackForEvery(i){

}
console.log(myMap(myCallbackForEvery, myArr))