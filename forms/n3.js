// Депозитный калькулятор

const depoositForm = document.querySelector('#depoositForm')
const depositInputs = depoositForm.children

const beforeElem = document.querySelector('.before')
const afterElem = document.querySelector('.after')
elemsFilling()

depoositForm.addEventListener('input', elemsFilling)

function elemsFilling(){
 let start = +firstDeposit.value 
 let persentage = +persent.value / 100
 let result = Math.round(start * (1 + persentage) ** +years.value)

 afterElem.innerHTML = result
 beforeElem.innerHTML = start

 beforeElem.style.height = `${start / 100}px`
 afterElem.style.height = `${result / 100}px`
}