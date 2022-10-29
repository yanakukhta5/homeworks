//Спрячьте сообщения с помощью делегирования
document.querySelector('section').addEventListener('click', event => {
 if(event.target.dataset.button != 'close') return
 const parent = event.target.closest('article')
 parent.style.display = 'none'
})

//Раскрывающееся дерево
document.querySelector('#tree').addEventListener('click', event => {
 console.log(event.target)
 if(event.target == 'ul') console.log('qwer')
}) 