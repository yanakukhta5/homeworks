/*const changeCssStyleName = (array) => array.split('-').map((item) => item[0].toUpperCase() + item.slice(1));
console.log(changeCssStyleName("-webkit-transition"));

array = [1, 2, 3, 4, 5];
const filterRange = (arr, a, b) => arr.filter(item => (item >= a && item <= b));
console.log(filterRange(array, 2, 4));

array = [1, 2, 3, 4, 5];
const filterRangeInPlace = (arr, a, b) => arr.forEach((item) => {
 if(item >= a && item <= b){
   arr.splice(item);
  }
 })
console.log(filterRangeInPlace(array, 2, 4));

let myArray = [5, 2, 1, -10, 8];
function numbersSort(a, b){
 return a  - b;
}; console.log(myArray.sort(numbersSort));

const user = {
  name: 'John',
  surname: 'Smith',
  age: 20,
}
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

const emptyObject = {}
const isEmpty = (obj) => { for(key in obj) return false;
  return true
}
const isEmpty = (obj) => ((Object.keys(obj).length) == 0);
console.log(isEmpty(emptyObject));

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  isFriendly: true,
  text: "bottom text",
}
let sum = 0;
 for(key in salaries){
  if(typeof salaries[key] !== 'number') continue;
  sum += salaries[key];
};console.log(sum);console.log(salaries);

const multiplyNumeric = (obj) => {
 for(key in obj){
   if(typeof obj[key] == 'number') obj[key] *= 2;
 }
}
console.log(salaries);
multiplyNumeric(salaries);
console.log(salaries);

const makingObject = (a, b) => {
  return {
    [a]: a,
    b,
  }
}
let myNewObject = (makingObject("Yana", "Anna"));
console.log(myNewObject);

const calculator = {
  read(){
  this.a = +prompt('Введите первое число', '');
  this.b = +prompt('Введите второе число', '');
  },
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  },
  answer(){
    alert(`Сумма равна: ${this.sum()}, произведение равно: ${this.mul()}`)
  }
console.log(calculator.sum(), calculator.mul());
}

function ConstructUserFunction(name, age, isBased){
  return{
  name,
  age,
  isBased
 }
}
const Yana = new ConstructUserFunction('Yana', 18, true)
console.log(Yana)

const myObject = {}
function A(){return myObject}
function B(){return myObject}
const a = A()
const b = B()
console.log(a==b)

function Calculator(){
  this.a, // строки 104-105 можно не писать, функция конструктор сама их неявно создала 
  this.b, // 
  this.read = function(){
    this.a = +prompt('Введите значение a', '')
    this.b = +prompt('Введите значение b', '')
  }
  this.sum = function(){
    return this.a+this.b
  }
  this.mul = function(){
    return this.a*this.b
  }
}
const calcObject = new Calculator()
//myNewCalcObgect.read()
console.log(calcObject.sum())

function Accumulator(startingValue){
 this.value = startingValue;
 this.read = function(){
  this.a = +prompt('Введите число', '')
  return this.value += this.a;
 }
}
const accumulatorObject = new Accumulator(0);
//accumulatorObject.read();
console.log(accumulatorObject.value);*/

function SosietyFearsThis({name, socialGroup, isOppressed = true, isBased = false}){
  this.screamCreed = function(){
    console.log(`${this.socialGroup == 'woman' ? `women` : this.socialGroup +'s' }, rise up!`)
  }
  this.name = name
  this.socialGroup = socialGroup
  this.isOppressed = isOppressed
  this.isBased = isBased
}
const user_id_1 = new SosietyFearsThis({socialGroup: `woman`, name: `Yana`, isBased: true})
const user_id_4 = new SosietyFearsThis({name: 'Andrew', socialGroup: 'gamer',isOppressed: false})
terrorists = [user_id_1]
terrorists.forEach(item => console.log(item))

const Yana = {
  name: 'Яна',
  sayHi(){
    alert(`Меня зовут ${this.name}`);
  }
}

// страница регистрации со сплит скрином 
// nickname text
// group select
// birthDate 
// check box types of oppression
// email
// twitter
// password
// phone
// media
// css in js styled components