let form = document.forms.myForm
let select = form.genres
let selectedValue = select.value
let index = select.selectedIndex
let text = select.options[index].text
console.log(selectedValue, text)

let newOption = new Option('Классика', 'classic', true, true)
select.append(newOption)