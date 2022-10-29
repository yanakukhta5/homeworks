let urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3']

let fetches = urls.map(url => fetch(url))

console.log(fetches)

Promise.all(fetches)
.then(resArr => {
 resArrObj = resArr.map(item => item.json())
 return Promise.all(resArrObj)
})
.then(result => console.log(result))