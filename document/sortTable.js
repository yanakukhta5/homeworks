const table = document.querySelector('table')
const rowsArr = Array.from(table.rows).slice(1)
const rowsArrSorted = rowsArr.sort((rowsArrA, rowsArrB)=>{
return  rowsArrA.cells[0].innerHTML > rowsArrB.cells[0].innerHTML ? 1 : -1
}
)
table.tBodies[0].append(...rowsArrSorted);