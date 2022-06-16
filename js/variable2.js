//variable2.js
var l1 //hoisting


//let ary;
let ary=new Array();// |0|1|2   ~|14|
ary[0]=10;

ary=[20, 30, 15, 27];//선언&초기화
ary[ary.length]=50;
ary[ary.length]=60;
ary[ary.length]=65;
ary[10] = 111;

console.log(ary);
console.log(typeof ary[7]);

for(let i=0; i<ary.length; i++){
    console.log(i +'번째'+ ary[i]);
}
ary = ['사과','바나나','고구마','수박',32] ;

console.clear();//로그 지우기
document.write('<ul>')
for(let val of ary){
    console.log(val);
    document.write('<li>'+ val +'</li>');
}
document.write('</ul>');

ary=[
    {name:'홍길동',age: 20, phone:'010-1111-2222'},
    {name:'김민수',age: 24, phone:'010-3333-4444'},
    {name:'박우용',age: 27, phone:'010-5555-6666'},
    {name:'최선식',age: 30, phone:'010-8888-8888'}
]
// document.write('<ul>');
// for(let person of ary){
//     document.write(`<li>'+ person['name']+','+person['phone']+'</li>`);
// }
// document.write('</ul>');
let str = '';
str +='<ul>';
for(let person of ary) {
    str+= '<li>이름:'+ person['name']+',나이:'+person['age']+', 연락처:'+person['phone']+'</li>';
}
str+='</ul>';

console.log(str);
//<table><tr><td>홍길동</td><td>20</td><td>010-1111-2222</td></tr> ... </table>
str = '<table border=1>';
 for(let person of ary) {
     str += '<tr><td>'+person['name']+'</td><td>'+person['age']+'</td><td>'+person['phone']+'</td></tr>';
 }
str += '</table>';

console.log(str);
document.write(str);


const v1 = 'Hello';//const 한번만선언 배열이나 오브젝트타입
//v1 = 'new';
//원시타입 vs 참조탄입
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2); 

let o1 = {name:'one'}
let o2 = o1; 
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2);//주소값이라서 동일한 값이 나옴

const obj = {
    sno:'22-12345',
    sname:'Hong'
}
obj.sno ='22-22222'; //obj 상수변수에 값을 새롭게 선언x obj 참조하는 속성의 값을 변경o
// obj = '';//새로운 값을 할당 => 오류
console.log(obj);

//var vs let : 변수선언
//var 변수선언 : scope => 전역변수 / 지역변수
//var는 같은 변수로 중복 선언가능 
//

var var1 = 'Hello';

function localFnc() {
    var var2 = 'Nice';//지역변수(local variable)
    console.log(var2);
    console.log(var1);
    
}
localFnc(); //함수호출
//console.log(var2);//밖에서 선언되지 않아서 오류
//console.log(var1);//오류

console.log(l1);//hoisting
var l1 = 'hello';
var l1 = 'hello';
console.log(l1);

//let 변수 선언 블록레벨 선언가능 
let var3 = 'Hello';
{
    let var3 ='new Hello'
    console.log(var3);
}
function localFnc() {
    let var4 = 'Nice';
    console.log(var4);
   // console.log(var3);//
    
}
localFnc(); //함수호출
//console.log(var4);//밖에서 선언되지 않아서 오류
//console.log(var3);//오류

var num ;//var는 블록 개념이 없음
for( num of ary){
    console.log(num)
}
console.log(num);//마지막값이 유지 그래서 두번 출력

let num1;
for( num1 of ary){
    console.log(num1)
}
console.log(num1);