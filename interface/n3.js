function runOnKeys(func, code1, code2){
 let pressed = []
 document.addEventListener('keydown', () => {
  let heveToPress = Array.from(arguments).slice(1)
  if(pressed[pressed.length - 1] !== event.code) pressed.push(event.code)
  let count = 0
  for(code of pressed){
   if(heveToPress.includes(code)) count++
  }
  if(count == heveToPress.length) func()
 })
 document.addEventListener('keyup', () => {
  pressed.splice(pressed.indexOf(event.code))
 })
}
runOnKeys(()=> alert('Получилось'), 'KeyZ', 'KeyA')