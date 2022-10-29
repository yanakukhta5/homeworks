async function wait() {
 await new Promise(resolve => setTimeout(resolve, 1000));
 return 10;
}

function f() {
 wait().then(result => result *2).then(result => alert(result))
}

//f()

async function loadJson(url) {
 let response = await fetch(url)
 if (response.status == 200) {
   let json = await response.json()
   return json
 }
  throw new Error(response.status);
}

loadJson('no-such-user.json')
 .catch(alert)