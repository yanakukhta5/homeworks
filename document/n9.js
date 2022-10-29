function getScrollBottom(container){
 return scrollBottom = container.scrollHeight - container.scrollTop - container.clientHeight
}
console.log(getScrollBottom(document.querySelector('.container')))

function getScrollBarWidth(container){
 return length = container.offsetWidth - container.clientWidth - container.clientLeft*2
}
console.log(getScrollBarWidth(document.querySelector('.container')))

function footballCenter(field){
 const ball = field.querySelector('.ball')
 console.log(ball)
 field.style.position = 'relative'
 field.onclick = function(){
  const topCenter = field.clientHeight/2 - ball.offsetHeight/2 + 'px'
  const leftCenter = field.clientWidth/2 - ball.offsetWidth/2 + 'px'
  ball.style.cssText = `position: absolute; top: ${topCenter}; left: ${leftCenter}`
 }
}
footballCenter(document.querySelector('.field'))