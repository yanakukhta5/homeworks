function delay(ms) {
 const promise = new Promise((resolve, reject)=> {
  setTimeout(() => resolve('неважно'), ms)
 })
 return promise
}
//delay(3000).then(() => alert('выполнилось через 3 секунды'));

function showCircle(cx,  cy, radius){
 const div = document.createElement('div')
 div.style.cssText = `transition: all 0.5s ease-in-out 0s; position: absolute; background-color: red; border-radius: 50%; width: 0px; height: 0px; display: flex; justify-content: center; align-items: center`
 div.style.top = `${cx}px`
 div.style.left = `${cy}px`
 document.body.append(div)
 return PROMISE = new Promise(function(resolve, reject){
  setTimeout( () => {
   div.style.left = `${cy - radius/2}px`
   div.style.top = `${cx - radius/2}px`
   div.style.width = `${radius}px`
   div.style.height = `${radius}px`
   div.addEventListener('transitionend', () => {
    resolve(div)
   })
  }, 1000)
 })
}
showCircle(300, 300, 400).then(div => setTimeout(() => div.innerHTML = 'Hello, world!', 1000))