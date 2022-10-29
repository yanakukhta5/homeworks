const div = document.querySelector('#myDiv')
 const textarea = document.createElement('textarea')
 textarea.id = 'myTextarea'

div.addEventListener('click', () => {
 const divContent = div.innerHTML
 textarea.innerHTML = divContent
 div.replaceWith(textarea)
})

textarea.addEventListener('blur', () => {
 const textareaContent = textarea.value
 console.log(textareaContent)
 div.innerHTML = textareaContent
 textarea.replaceWith(div)
})