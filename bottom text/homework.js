let x, y, z, a, b, c, questionNumber, answer;

do {questionNumber = +prompt('Решение примера под каким номером Вам интересно?', '')} while(questionNumber>8 || questionNumber<1 || isNaN(questionNumber))
 a = x = +prompt(`Введите ${questionNumber<=4 ? `x` : `a`} `, '');
 b = y = +prompt(`Введите ${questionNumber<=4 ? `y` : `b`} `, '');
 c = z = +prompt(`Введите ${questionNumber<=4 ? `z` : `c`} `, '');

//a=x=2;b=y=3;z=c=4;questionNumber=1;

switch(questionNumber){
 case 1:
  answer = Math.log( (y-Math.sqrt(Math.abs(x))) * (x-y/(z+Math.pow(x, 2)/4)) )
 break;
 case 2:
  answer = ( 2*Math.cos(x-(Math.PI/6) / (1/2)+Math.pow(Math.sin(y), 2)) ) + (Math.abs(y-x)/3)
 break;
 case 3:
  answer = ((x/y) * (z+x) * Math.pow(Math.E, Math.abs(x-y))+ Math.log(1+Math.E)) / ( Math.pow(Math.sin(y), 2) - Math.pow((Math.sin(x)*Math.sin(y)), 2))
 break;
 case 4: answer = (3 + Math.pow(Math.E, y-1)) / (1 + Math.pow(x, 2) * Math.abs(y - Math.tan(z)))
 break;
 case 5:
  answer = a*b<-2 ? Math.sqrt(Math.abs(a*b))+2*c : -2<=a*b<=2 ? Math.pow(a, 3) + Math.pow(b, 2) - Math.pow(c, 2) : Math(a, c)-b
 break;
 case 6:
  answer = x<y ? Math.atan(x+Math.abs(y)) : x>y ? Math.atan(Math.abs(x)+y) : Math.pow(x+y, 2) 
 break;
 case 7:
  answer = x/y>0 ? Math.log(x+y)+Math.pow(Math.pow(x, 2)+y, 3) : x/y<0 ? Math.log(Math.abs(x/y))+Math.pow(Math.pow(x, 2)+y, 3) : y!==0 && x==0 ? Math.pow(Math.pow(x, 2)+y, 3) : 0
 break;
 case 8:
  answer = x-y>0 ? Math.sin(x+y)+2*Math.pow(x+y, 2) : x-y<0 ? Math.sin(x-y)+2*Math.pow(x-y, 3) : y!==0 && x==0 ? Math.abs(Math.pow(x, 2)+Math.sqrt(y)) : 0
 break;
}

alert(`Вы выбрали вопрос под номером ${questionNumber} и его ответ: ${answer}`);