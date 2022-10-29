// date
//// концепция чистых функций (карирование, рекурсия)


let myNewDate = new Date(2012, 1, 20, 3, 12, 0, 0) // new без new
console.log(myNewDate)

const getWeekDay = (date) => {
 const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
 return week[date.getDay()]
}
console.log(getWeekDay(myNewDate))

const getWeekDayNum = (date) => {
 const week = [1, 2, 3, 4, 5, 6, 7]
 return week[date.getDay()]
}
console.log(getWeekDayNum(myNewDate))

const getWeekDayNum_ = (date) => {
 return date.getDay()+1
}
console.log(getWeekDayNum_(myNewDate))

const getDateAgo = (date, days) => {
 let currentDay = {...date}.setDate('')
}


