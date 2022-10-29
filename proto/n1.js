'use strict'

let head = {
 glasses: 1
}

let table = {
 pen: 3,
 __proto__: head
}

let bed = {
 sheet: 1,
 pillow: 2,
 __proto__: table
}

let pockets = {
 money: 2000,
 __proto__: bed
}

console.log(pockets.pen)
console.log(bed.glasses)

const hamster = {
 stomach: [],
 eat(food){
  this.stomach.push(food)
 }
}

const fastHamster = {
 __proto__: hamster,
 stomach: [],
}

const lazyHamster = {
 __proto__: hamster,
 stomach: [],
}

fastHamster.eat('carrot')

console.log(fastHamster.stomach)
console.log(lazyHamster.stomach)
console.log(lazyHamster)