document.addEventListener('click', event => {
 console.log('x: ' + window.pageXOffset)
 console.log('y: ' + window.pageYOffset)
 //window.scrollBy(0, 20)
 document.querySelector('.field').scrollIntoView()
})