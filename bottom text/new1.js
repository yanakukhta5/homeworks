function sum(){
 let a = +prompt('Введите первое число', '')
 let b = +prompt('Введите второе число', '')
 console.log((+a + +b).toFixed(1))
 return (+a + +b).toFixed(1)
}
const readNumber = () => {
let i;
 do{
  i = +prompt('Введите числовое значение', '')
 }while(isNaN(i))
}
readNumber()

const random = (min, max) => {
return Math.random()*(max-min)+min
}
console.log(random(1, 9))

const ucFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : `Anon` // { } return (condition)? 1:2 
console.log(ucFirst('qw'))

/////////////////////// make every
const badWords = ['fuck', 'xxx',  'viagra', 'woman'] ///////////////// let
const checkSpam = (str) => {
 for(let i=1; i<=badWords.length; i++){
  if(str.toLowerCase().includes(badWords[i])) return true
 }
 return false
}

let bigStr = 'Вот, что мне хотелось бы сказать на эту тему:'
let smallStr = 'Yana'
const truncate = (str, maxlength) => maxlength < str.length ? str = str.slice(0, maxlength) + '...' : str
console.log(truncate(bigStr, 20))
console.log(truncate(smallStr, 20))
// bigStr = truncate(bigStr, 20)
console.log(bigStr)

const extractCurrencyValue = (str) => +str.slice(1)
console.log(extractCurrencyValue('$300'))
console.log(typeof extractCurrencyValue('$300'))
