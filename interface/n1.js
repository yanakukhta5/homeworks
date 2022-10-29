const list = document.querySelector('#list')
document.onmousedown = function(){return false}

function toggleSelected(elem){
 elem.classList.toggle('selected')
}

list.addEventListener('click', () => {
 const target = event.target
 if(target.tagName != 'LI') return
 if(event.ctrlKey) toggleSelected(target)
 else{
  const selectedList = list.querySelectorAll('.selected')
  console.log(selectedList)
  for (const li of selectedList) {
   li.classList.remove('selected')
  }
  toggleSelected(target)
 }
})