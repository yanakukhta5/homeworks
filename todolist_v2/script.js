const root = document.querySelector('#root')
const createButton = document.querySelector('#createButton')
const body = document.body
const popup = document.querySelector('#popup')
const popupSubmit = document.querySelector('#popupSubmit')
const taskForm = document.querySelector('#taskForm')
const listRoot = document.querySelector('#listRoot')
const url = new URL('/todos', 'https://jsonplaceholder.typicode.com')
const select = document.querySelector('#select')
let objArr = []

function http(method, url, body = null){
 const xhr = new XMLHttpRequest()
 xhr.open(method, url)
 xhr.setRequestHeader('Content-Type', 'application/json')
 xhr.responseType = 'json'
 xhr.send(body)
 xhr.onloadend = () => {
  const answer = xhr.response
  if(method == 'GET') objArr = answer.slice(0)
  if(method == 'POST') objArr.push(answer)
  if(method == 'DELETE') objArr.splice(objArr.indexOf(url.pathname.replace(/\D+/g,"")))
  Array.isArray(objArr) ? objArr.forEach(obj => taskRender(obj)) : taskRender(objArr)

  select.oninput = function(){
   switch(this.value){
    case 'latest': objArr.sort((a, b) => a.id - b.id)
    break
    case 'completeness': objArr.sort((a, b) => b.completed - a.completed)
    break
   }
   objArr.forEach(obj => taskRender(obj))
  }
 }
}

function taskRender({title, text = "", completed, id}){
 const li = document.createElement('li')
 const del = document.createElement('img') 
 del.src = "delete.svg"
 del.classList.toggle('delete')
 li.classList.toggle('todo-item')
 li.style.backgroundColor = JSON.parse(completed) ? 'white' : '#f9e2e2'
 li.innerHTML = `
  <div class="todo-item__top">
   <p class="todo-number">${id}</p>
   <h2 class="todo-title">${title}</h2>
  </div>
  <p class="todo-text">${text}</p>       `
 li.append(del)
 listRoot.prepend(li)
 del.addEventListener('click', () => {
  http("DELETE", new URL (url + `/${id}`))
 })
}

function popupFunc(){
 [root, body, popup].forEach(item => item.classList.toggle('popupActivated'))
}

createButton.addEventListener('click', popupFunc)

popupSubmit.addEventListener('click', event => {
 event.preventDefault()

 const data = new FormData(taskForm)
 data.append('completed', false)
 const values = Object.fromEntries(data.entries())

 http('POST', url, JSON.stringify(values))
 popupFunc()
 document.getElementById("text").value = ""
 document.getElementById("title").value = ""
})


http('GET', url)