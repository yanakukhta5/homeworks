// Исправьте функцию, теряющую "this"
function login(fali, ok) {
 let a = prompt('enter password', 'password')
 if(a == 'password') ok()
 else fali()
}
const user = {
 name: 'Yana',
 fail(){
  alert(`${this.name} not logged in`)
 },
 ok(){
  alert(`${this.name} logged in`)
 }
}
login(user.fail.bind(user), user.ok.bind(user))


// Использование частично применённой функции для логина
function askPassword(ok, fail) {
 let password = prompt("Password?", 'rockstar');
 if (password == 'rockstar') ok();
 else fail();
}

 user.login = function(result){
   alert( this.name + (result ? ' logged in' : ' failed to log in') );
 }

askPassword(user.login.bind(user, false), user.login.bind(user, true)); // ???????????????????????????????????????????????