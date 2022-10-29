'use strict'

// Создайте новый объект с помощью уже существующего
function MyConstructor(name){
 this.name = name
}

const user = new MyConstructor('Yana')
const userSon = new user.constructor('Andrew') // prototype??????????

console.log(user)
console.log(userSon)