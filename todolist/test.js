let n = 0
let showInOneTime = 10
let resultShow
let resultCopy
let root = document.querySelector('#todosParent')
let select = document.querySelector('#sortSelect')

function sortBySelectedValue(){
 select.value == 'number' ? resultShow.sort((a, b) => a.id - b.id) : resultShow.sort((a, b) => +a.completed - +b.completed)
}

async function getAPI(url, n){
let response = await fetch(url)
let result = await response.json()
resultCopy = result.slice()
resultShow = result.slice(0, showInOneTime + n)
sortBySelectedValue()
arrRender(root, resultShow)
}

let showMoreButton = document.createElement('button')
showMoreButton.classList.toggle('showMoreButton')
showMoreButton.innerText = "show more"
document.body.append(showMoreButton)
showMoreButton.addEventListener('click',() => {
 n = n + showInOneTime
 getAPI('https://jsonplaceholder.typicode.com/todos', n)
})

select.addEventListener('change', () => {
 sortBySelectedValue()
 arrRender(root, resultShow)
})

function todoElemCreate({id, title: taskTitle, completed}){
 let elem = document.createElement('div')
 let title = document.createElement('h2')
 let number = document.createElement('p')
 let isDone = document.createElement('p')
 elem.classList.toggle('todoItem')
 completed ? elem.classList.toggle('done') : elem.classList.toggle('not_done')
 title.innerHTML = taskTitle
 number.innerHTML = id
 isDone.innerHTML = completed ? 'Done' : 'Not done'
 elem.prepend(number, title, isDone)
 return elem
}

function arrRender(parent, arr){
 parent.innerHTML = ''
 let elemArr = arr.map(item => todoElemCreate(item))
 parent.append(...elemArr)
}

getAPI('https://jsonplaceholder.typicode.com/todos', n)