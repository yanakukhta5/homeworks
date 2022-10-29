let ageTable = document.getElementById('age-table')
let labelList = ageTable.querySelectorAll('label')
let ageTd = ageTable.firstElementChild.firstElementChild
let searchForm = document.getElementsByName('search')['0']

let firstInputSearchForm = searchForm.querySelector('input')
let lastElementForm = searchForm.lastElementChild


console.log(ageTable, labelList, ageTd, searchForm, firstInputSearchForm, lastElementForm)