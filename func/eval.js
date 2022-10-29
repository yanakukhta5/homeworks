'use strict'

let x = prompt('Введите выражение, которое нужно посчитать', '')

function wer(a){
 return a + eval(x)
}

let q = wer(10)

console.log(q % 2 == 0 ? 'чётное' : 'нечётное')