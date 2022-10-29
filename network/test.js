function sendData(){
 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  body: JSON.stringify({
   name: 'Andrew', 
   age: 18
  })
 })
 .then(response => response.text())
 .then(result => console.log(result))
}

setTimeout(sendData, 0)