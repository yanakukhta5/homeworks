//Вывод каждую секунду

const printNumbers = (from, to, delay = 1000) => {
 let current = from
 console.log(current)
 if(current !== to){
  current++
  printNumbers(current, )
 }
}

printNumbers(1, 4, 1000)