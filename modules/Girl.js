import {Woman} from "./Woman.js"

class Girl extends Woman {
 constructor(name, age, profession, style){
  super(name, age, profession)
  this.style = style
 }
}

const yana = new Girl('Yana', 18, 'no jod', 'tomboy')

yana.sayHi()
