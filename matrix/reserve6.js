'use strict'

// содание вспомогательных переменных и вопросы для пользователя
let m = +prompt('Введите количество строк матрицы', '')

// описание функции заполнения матрицы
function fillingMatrix(m, n, typeOFmatrix = ''){
 let vectorMention = ''
 if(n==1 || m==1) vectorMention='(векторе)'
 let Matrix = []
 for (let i = 0; i < m; i++){
  Matrix.push( [] )
  for(let j = 0; j<n; j++){
   Matrix[i].push( [] )
   Matrix[i][j] = +prompt(`Введите элемент на строке ${i+1} и столбце ${j+1} в матрице ${vectorMention} ${typeOFmatrix}`, '')
  }
 }
 return Matrix
}

// описание функции транспонирования матрицы
function matrixTranspositioning(Matrix){
 let m = Matrix.length
 let n = Matrix[0].length
 let transpositionedMatrix = []
 for(let j = 0; j < n; j++){
  transpositionedMatrix.push( [] )
  for (let i = 0; i<m; i++){
   transpositionedMatrix[j].push( [] )
   transpositionedMatrix[j][i] = Matrix[i][j]
  }
 }
 return transpositionedMatrix
}

// описание функции умножения матриц
function matrixMultiplication(matrix1, matrix2){
 let resultMatrix = []
 if(matrix1[0].length == matrix2.length){
  for(let i = 0; i < matrix1.length; i++){
  resultMatrix.push( [] )
   for(let j = 0; j < matrix2[0].length; j++){
    resultMatrix[i].push( [] )
    resultMatrix[i][j] = 0;
      for(let k = 0; k < matrix1[0].length; k++) resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
   }}}else{
  console.log('Операция "Умножение матриц" невозможна')
  return
 }
 return resultMatrix
}

//описание функции расширения матрицы
function extensionMatrix(Matrix, vector) {
  let extendedMatrix = JSON.parse(JSON.stringify(Matrix))
  if(extendedMatrix.length - vector.length >= 0) for(let i=0; i<extendedMatrix.length; i++) extendedMatrix[i].push(vector[i][0])
  else console.log('Транспонирование матриц невозможно, так как у них разное количество строк')
  return extendedMatrix
}

// заполнение матрицы в зависимости от её количества строк и столбцов
 let SquareMatrix
 let extendedMatrix
 let Matrix
 let vectorB = fillingMatrix(m, 1, 'свободных членов')
 let n = +prompt('Сколько столбцов будет в матрице коэффициентов при неизвестных?', '')
 if(n <= m){
  Matrix = fillingMatrix(m, n, 'коэффициентов при неизвестных')
  console.log(Matrix)
  console.log(vectorB)
  extendedMatrix = extensionMatrix(Matrix, vectorB)
  if(n!=m){
    let transpositionedMatrix = matrixTranspositioning(Matrix)
    console.log(transpositionedMatrix)
    Matrix = matrixMultiplication(transpositionedMatrix, Matrix)
    console.log(Matrix)
    vectorB = matrixMultiplication(transpositionedMatrix, vectorB)
    console.log(vectorB)
    extendedMatrix = extensionMatrix(Matrix, vectorB)
    console.log(extendedMatrix)
  }
  console.log(extendedMatrix)
 }else console.log('Матрица будет неопределенной')
 
 let x = []
 let m_
 // прямой ход
 for(let k=1; k<n; k=k+1){
  for(let j=k; j<n; j=j+1){
   m_ = extendedMatrix[j][k-1] / extendedMatrix[k-1][k-1];
   for(let i=0; i<n+1; i++){
     extendedMatrix[j][i] = extendedMatrix[j][i] - m_ * extendedMatrix[k-1][i]
   }
  }
 }
 // обратный ход
 for(let i = n-1; i>=0; i=i-1){
  x[i] = extendedMatrix[i][n] / extendedMatrix[i][i]
  for(let c=n-1; c>i; c--) x[i] = x[i] - extendedMatrix[i][c] * x[c] / extendedMatrix[i][i]
 }
 // вывод вектора неизвестных
 for(let i = 0; i < n; i++) console.log(`x${i+1}=` + x[i])