const url = 'https://cdn.cur.su/api/cbr.json'

const dollars = document.querySelector('#dollars')
const rubls = document.querySelector('#rubls')
const inputArr = [dollars, rubls]

function dependentElenRender(argumentElem, dependentElem, conversion = 1){
 dependentElem.innerHTML = (argumentElem.value * conversion).toFixed(2)
}

fetch(url)
 .then(response => response.json())
 .then(result => {
  const rub = result.rates.RUB
  const dollar = 1 / rub
  rubls.value = (dollars.value * rub).toFixed(2)
  inputArr.forEach(input => {

  input.addEventListener('input', () => {
   const thisElem = input
   const anotherElem = !inputArr.indexOf(thisElem) ? inputArr[1] : inputArr[0]
   const currency = thisElem.id == 'dollars' ? rub : dollar
   anotherElem.value = (thisElem.value * currency).toFixed(2)
  })
 })
 })