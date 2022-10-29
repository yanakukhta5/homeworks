class Article{
 constructor(text){
  this.text = text
 }
 static sortCallback(articleA, articleB){
  return articleA.text - articleB.text
 }
}

const article1 = new Article('a')
const article5 = new Article('e')
const article4 = new Article('d')
const article6 = new Article('f')
const article3 = new Article('c')
const article2 = new Article('b')

let articles = [article1, article2, article3, article4, article5, article6]

articles.sort(Article.sortCallback())