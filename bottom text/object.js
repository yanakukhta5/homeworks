let user = {
 name: "John",
 years: 30
}
let {name, years: age, isAdmin = false} = user // props
console.log(name)
console.log(age)
console.log(isAdmin)

let salaries = {
 "Ann": 100,
 "Bill": 300,
 "Yana": 45000000000000,
 "Clara": 250
}

const topSalary = (salariesObj) => {
 if(Object.entries(salariesObj).length = 0) return null
 // return Object.entries(salariesObj).reduce((prevItem, item) => item[1] > prevItem[1] ? item : prevItem, Object.entries(salariesObj)[0])[0]
 //return Object.entries(Object.assign({}, salariesObj)).sort((a, b) => b[1] - a[1])[0][0] // что такое a и b? a - next; b
 let [topSalary, topName] = [Object.entries(salariesObj)[0][1], Object.entries(salariesObj)[0][0]]
 for(const [name, salary] of Object.entries(salariesObj)){ // [name, salary] = item 
   if(topSalary < salary) {
    topName = name
    topSalary = salary
   }
 }
 return topName
}
console.log(topSalary(salaries))

let user1 = {
  fullname: 'Yana Kukhta',
  age: 18
 }
 let jsonUser1 = JSON.stringify(user1)
 let user1_ = JSON.parse(jsonUser1)
 let [q, w] = user1_.fullname.split(' ')
 delete user1_.fullname
 user1_.firstname = q
 user1_.lastname = w
 console.log(user1_)

let room = {
 number: 23,
}
let day = {
 name: 'Party',
 quests: ['Yana', 'Andrew'],
 location: room,
}
room.situation = day
day.day_ = day

let strEvent = JSON.stringify(day, (key, value) =>  key != "" && value == day ? undefined : value ) //            tf

console['log'](strEvent)