'use strict'

class Cat extends Object{
 constructor(name){
  super()
  this.name = name
 }
 sayHi(){
  alert('Hello!')
 }
 hasOwnProperty(prop){
  super.hasOwnProperty(prop)
 }
}

const myCat = new Cat('Ася')

console.log(myCat.hasOwnProperty('name')) // 