 //variable.js

 console.log("Hello, World!!");
 document.write('<h3>Hello, World!!</h3>');

 let num = 0;
 num = 'Hello';
 num = 10;
 num = 'ten';
 num = true;
 num = null; //object => class의 인스턴스.
 let num1; //undefined 어떤형태인지 선언되지않음.

 console.log(num1);
 console.log(typeof num1); //타입을 알아볼때

 num1 = 100;
 num2 = 200;//변수의 선언이 없이 사용 : 전역객체(window)의 속성.
 console.log(num1 + num2);

 console.log(window);

//  class Student {
//      String sno;
//      String sname;
//      void showInfo () {
//         return this.sno + this.sname;
//     }
//  }

//  Student student = new Student();
//  student.sno;
//  student.showInfo();

 //window.alert('hi');//팝업창

//변수 : 학생이름, 학생번호, 영어, 수학
let student = new Object();// object 선언.
student.sno = '22-0123';
student.sname = '홍길동';
student.engScore= 90;
student.methScore =80;

console.log(student);

let person = {
    fname: '김민수',
    age: 20,
    height: 175.5,
    showInfo: function() {
        return this.fname +',' +this.age + ','+this.height;
    }
};
person.weight='68.5';

console.log(person.fname);//이름부분만 가지고옴
console.log(person.showInfo);
console.log(person.showInfo());
console.log(person['age']);
let field ='height';
console.log(person[field]);

//전체 필드를 fot loop ..in
//debugger
for(let field in person) { //field 변수
    console.log(person[field]);
    console.log(field, '=>',person[field]);
}
console.log(field);
let x =10 
let y=20

//변수 : me  => 이름, 취미, 연락처, 주소, 소개:이름,취미,연락처 반환.(속성)
let me = {
    mname: '서영호',
    hobby: '영화보기',
    tel:'010-1234-5678',
    add:'대구 중구 중앙대로',
    introduce: function(){
        return this.mname+','+this.hobby+','+this.tel;
    }
    }
    console.log(me.introduce());