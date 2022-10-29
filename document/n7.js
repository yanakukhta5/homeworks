//опустошение элемента
function clear(element){
 element.innerHTML = ''
}
//setTimeout(()=>{clear(document.querySelector('ul'))}, 1000)
//setInterval(() => {document.querySelector('ul[id="second-ul"]').style.visibility=(document.querySelector('ul[id="second-ul"]').style.visibility=='visible')?'hidden':'visible'; }, 1000)

// создание списка
let list = document.querySelector('[data-list="first-list"]')
let agreement
(function listFunc(){do{
let newListItemText = prompt('Введите пункт списка')
let newListItem = document.createElement('li')
newListItem.textContent = newListItemText
list.append(newListItem)
agreement = confirm('Есьб ли ещё что-тто, что нужно записать?')
}while(agreement)})

//Выведите список потомков в дереве
let secondList = document.querySelectorAll('ul')[1]
for (let i = 0; i < secondList.children.length; i++) {
 const item = secondList.children[i];
 let count
 if(item.querySelector('ul')) count = item.querySelector('ul').children.length
 let spanCount = document.createElement('span')
 spanCount.textContent = ` [${count}]`
 if(count) item.firstElementChild.after(spanCount)
}

// Создайте дерево из объекта
function createTree(container, dataObj){
 const keysArr = Object.keys(dataObj)
 const valuesArr = Object.values(dataObj)
 if(keysArr){
  const ul = document.createElement('ul')
  container.append(ul)
  for(let i = 0 ; i < keysArr.length; i++){
   const li = document.createElement('li')
   li.innerHTML = keysArr[i]
   ul.append(li)
   if(typeof valuesArr[i] === 'object') createTree(li, valuesArr[i])
  }
 }
}
let data = {
 "Рыбы": {
   "форель": {},
   "лосось": {},
 },
 "Деревья": {
   "Огромные": {
     "секвойя": {},
     "дуб": {}
   },
   "Цветковые": {
     "яблоня": 'яблоня',
     "магнолия": {}
   }
 }
}
createTree(document.querySelector('#dataContainer'), data)

//Создайте календарь в виде таблицы
function createCalendar(container, year, month){
 const date = new Date(2022, 9) // октябрь 2022 
 const table = document.createElement('table')
 const tableBody = table.createTBody()
 const tableHead = table.createTHead()
 table.prepend(tableHead)
 const tableHeadTr = document.createElement('tr')
 tableHead.prepend(tableHeadTr)
 const dayArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
 for(let i = 0; i < dayArr.length; i++) {
  const tableHeadCell = document.createElement('td')
  tableHeadCell.innerHTML = dayArr[i]
  tableHeadTr.append(tableHeadCell)
 }
 table.append(tableBody)
 container.prepend(table)
 //function getDaysCount(x, y) { return 28 + ((x + Math.floor(x / 8)) % 2) + 2 % x + Math.floor((1 + (1 - (y % 4 + 2) % (y % 4 + 1)) * ((y % 100 + 2) % (y % 100 + 1)) + (1 - (y % 400 + 2) % (y % 400 + 1))) / x) + Math.floor(1/x) - Math.floor(((1 - (y % 4 + 2) % (y % 4 + 1)) * ((y % 100 + 2) % (y % 100 + 1)) + (1 - (y % 400 + 2) % (y % 400 + 1)))/x); }
 //console.log(getDaysCount(month + 1, year))
}
createCalendar(document.querySelector('#calendarContainer'), 2022, 9)
