let buttonsList = document.querySelectorAll('*')

buttonsList.forEach(elem => elem.addEventListener('click', e => {console.log(e.currentTarget)}, {capture: true}))