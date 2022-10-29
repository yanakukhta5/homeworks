'use strict'

let myDiv = document.querySelector('div');
let myUl = document.querySelector('ul');
let secondLi = document.querySelectorAll('li')[1]

//console.log(myDiv, myUl, secondLi);

let table = document.querySelector('table[id="matrix"]')
table.style.cssText = 'width: 500px; height: 500px; border: 3px solid red; text-align: center; margin: 20px auto;'
table.innerHTML = '<tbody>'

for (let i = 0; i < 5; i++) {
 let row = document.createElement('tr')
 table.prepend(row)
 console.log(row)
 for (let j = 0; j < 5; j++) {
  let cell = document.createElement('td')
  row.prepend(cell)
  cell.style.backgroundColor = 'black'
  if(i % 2 == j % 2) cell.style.backgroundColor = 'white'
  if(i == j) cell.style.backgroundColor = 'red'
 }
 table.prepend(row)
 console.log(row)
}