document.addEventListener('DOMContentLoaded', ready)

function ready(){

 function clean(){
  document.querySelector('#text').innerHTML = ' '
 }
 let cleanButton = document.querySelector('[data-clean="button"]')
 cleanButton.addEventListener('click', clean)

 function hideSelf(){
  this.style.visibility = 'hidden'
 }
 document.querySelector('#hideSelf1').addEventListener('click',hideSelf)
 hideSelf1.onclick = hideSelf
 
 function showList(){
  let list = document.querySelector('[data-content="list"]').children[1]
  list.hidden = !list.hidden
 }
 document.querySelector('[data-content="list"]').children[0].addEventListener('click', showList)

 function addCloseButton(elem){
  let closeButton = document.createElement('button')
  closeButton.style.cssText = "background-color: black; position: absolute; width:1em; height: 1em; padding: 0px; top: 0; right: 0;"
  elem.append(closeButton)
  function delParent(){
   elem.style.display = 'none'
  }
  closeButton.addEventListener('click', delParent)
 }
 addCloseButton(document.querySelector('.article'))

function sliderActivate(slider){
  const nextArrow = document.createElement('button')
  const prevArrow = document.createElement('button')
  const sliderHeight = getComputedStyle(slider).height
  let position = 0
  const sliderTrack = slider.querySelector('.slider-track')
  const sliderOverflow = slider.querySelector('.slider-overflow')
  sliderTrack.style.transform = `translateX(${position}px)`
  sliderOverflow.before(prevArrow)
  sliderOverflow.after(nextArrow)
  prevArrow.style.cssText = `height: ${sliderHeight}; position: absolute; left: -15px`
  nextArrow.style.cssText = `height: ${sliderHeight}; position: absolute; top: 0px; right: -15px`
  prevArrow.disabled = true
  nextArrow.onclick = function(){
    position -= 100
    sliderTrack.style.transform = `translateX(${position}px)`
    console.log(position)
    if(position == -400) nextArrow.disabled = true
    prevArrow.disabled = false
  }
  prevArrow.onclick = function(){
    position += 100
    sliderTrack.style.transform = `translateX(${position}px)`
    if(position == 0) prevArrow.disabled = true
    console.log(position)
    nextArrow.disabled = false
  }
 }
  sliderActivate(document.querySelector('.slider.slider-container'))

  function football(field){
    const ball = field.querySelector('.ball')
    field.addEventListener('click', event => {
      const eventWindowX = event.clientX
      const eventWindowY = event.clientY
      const offsetLeft = field.offsetLeft
      const offsetTop = field.offsetTop
      console.log(offsetTop, offsetLeft)
      const ballHalf = ball.offsetHeight / 2
      console.log(ballHalf)
      const ballPositionTop = eventWindowY - offsetTop - ballHalf
      const ballPositionLeft = eventWindowX - offsetLeft - ballHalf
      console.log(offsetLeft, offsetTop)
      ball.style.cssText = `top: ${ballPositionTop}px; left:${ballPositionLeft}px`
    })
  }
  football(document.querySelector('.field'))
}