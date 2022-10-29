'use strict'

class Clock{
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

const myClock = new Clock()
myClock.start()