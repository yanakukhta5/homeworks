import {Human} from "./Human.js"

class Woman extends Human{
 constructor(name, age, profession){
  super(name, age)
  this.profession = profession
 }
}
export {Woman}