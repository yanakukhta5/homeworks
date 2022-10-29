const dictionary = Object.create(null)

Object.defineProperty(dictionary, 'toString', {
 value: function(){
  return (Object.keys(this).join(', '))
 },
 enumerable: false
})

dictionary.mama = 'Mother'
dictionary.papa = 'Father'

console.log(dictionary.toString())