'use strict'

// Написать свой bind, используя замыкания
function loggingPerson(){
 console.log(`Person: ${this.name}, age: ${this.age}, job: ${this.job}`)
}

function firstLetterToUpperCase(str){
 return str[0].toUpperCase() + str.split('').splice(1, str.length).join('')
}

const person = {
 name_: null,
 age: 18,
 job: null,
 get name(){
  return firstLetterToUpperCase(this.name_)
 },
 set name(value){
  this.name_ = value.toLocaleLowerCase().trim()
 }
}
person.name = ` YANA `


let binded = bind(loggingPerson, person)

function bind(f, victum){
 return f.bind(victum)
}

binded()