'use strict'

let myMatrix = [
 [3, 1, 1, 2],
 [0, 0, 2, 1],
 [6, 2, 2, 4],
 [-3, -1, 1, -1]
]

let myMatrix1 = [
 [3, -6, 9, 13],
 [-1, 2, 1, 1],
 [1, -2, 2, 3]
]

let myMatrix_ = [
 [3, 1, 1],
 [6, 2, 78],
 [-3, -1, -1],
 [0, 0, 2],
]

let aq = [
 [34, -5],
 [-5, 38]
]

let myQWE = [
 [8, 6, 5, 2, 21],
 [3, 3, 2, 1, 10],
 [4, 2, 3, 1, 8],
 [3, 3, 1, 1, 15],
 [7, 4, 5, 2, 18]
]

console.log(myQWE)

// описание функции приведения матрицы к ступенчатому виду
function trianglulized(Matrix) {
 let m = Matrix.length
 let n = Matrix[0].length
 //try{
  for(let k=1; k < ( n <= m ? Math.max(m, n) : Math.min(m, n) ) ; k++){
   debugger
  for(let j=k; j < Math.min(n, m); j++){
   let mul = Matrix[j][k-1] / Matrix[k-1][k-1];
   for(let i=0; i < ( n <= m ? Math.min(m, n) : Math.max(m, n) ); i++){
    Matrix[j][i] = Matrix[j][i] - mul * Matrix[k-1][i]
    if(Matrix[j].reduce( (acc, item) => acc+item, 0) == 0) Matrix.splice(j, 1)
  //  if(Math.abs(Matrix[i][j]) < 1e-20) Matrix[i][j] = 0  //Matrix.splice(j, 1)
   }
  }
 }
//}catch(err){ return Matrix }
 return Matrix
}

console.log(trianglulized(myMatrix))
