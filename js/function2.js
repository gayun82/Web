//function2.js

//함수정의문
function sumAry(ary) { //매개변수 //값이 아니고 ary함수의 변수이름
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
//const sumAry = function(ary) {...} => 함수정의문 => 함수표현식처리

let args = [1, 2, 3, 4, 5]; //매개값
sumAry(args); //실행문 호출

let arrNum = [1, 2, 3];
sumAry(arrNum);

//함수표현식
const sum = function (num1, num2) {
    if (!num1) { //undefined -> false 의미(null,0)
        num1 = 0; //값이 안들어왔을때 초기값을 0으로 하겠다
    }
    num2 = num2 == undefined ? 0 : num2 //삼항연산자
    return num1 + num2;
}
console.log(sum(10)); //함수정의문()
//console.log(sum(10, 20));

const sum2 = sum; //함수정의문
console.log(sum2);

console.log(sumAry);

//함수표현식
// const sayHello = function (name) {
//     return 'Hello' + name;
// }
const sayHello = (name) => 'Hello' + name //화살표함수
//메소드의 매개값 (콜백함수)
console.log(sayHello('홍길동'));

let arr = ['홍길동', '김영수', '최민식'];
arr.forEach(function (val /*, ind, ary*/ ) {
    console.log(sayHello(val));
}); //
arr.forEach((val) => console.log(sayHello(val)));


arrNum = [29, 34, 12, 55, 29, 42];
//1.배열의 각 요소중에 짝수의 값만 더하도록 sumEven(args);
function sumEven(arrNum) {
    arrNum.forEach(function(val) {
        let sum = 0;
        if (val % 2 == 0) {
            sum += val;
        }
        return sum;
    })
}
//2.배열의 홀수번째 요소의 합 sumOdd(args);
function sumOdd(arrNum) {
    arrNum.forEach(function(val){
        let sum = 0;
        if(arr.length % 2 != 0){
            sum += arr.length;
        }return sum;
    })
}

console.log(sumEven(arrNum));
console.log(sumOdd(arrNum));