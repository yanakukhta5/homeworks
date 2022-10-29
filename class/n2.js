'use strict'

class Animal{
 constructor(name){
  this.name = name
 }
}
class Rabbit extends Animal{
 constructor(name){
  super(name)
  this.birthDate = new Date()
 }
}
const myRabbit = new Rabbit('Rod')
console.log(myRabbit.name)

//////////////////////////////////////

class Clock{
 constructor(precision){
  this.precision = precision
 }
 render(){
  let date = new Date
  function lengthCheck(){
   if(this.toString().length = 1) return '0' + this.toString()
  }
  console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() )
 }
 start(){
  setInterval( () => {this.render()} , 1000)
 }
}

class ExtendedClock extends Clock{
 constructor(precision){
  super(precision)
 }
 start(){
  setInterval( () => {this.render()} , this.precision)
 }
}

const myExtendedClock = new ExtendedClock(1000)
//myExtendedClock.start()

