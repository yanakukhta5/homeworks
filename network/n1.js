let arr = ['frenck', 'tianon']

async function getUsers(names){
 let users = []
 for (const name of names) {
  let response = await fetch('https://api.github.com/users/' + name)
  let result
  if(response.status === 200){ result = await response.json() }
  else result = null
  users.push(result)
 }
 return users;
}

console.log(getUsers(arr))