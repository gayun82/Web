//function1.js

function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20));
console.log(sum('10', '20')); //+ 두문장을 연결 

function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus('20', '10')); //문자열인데도 계산

function sumAry(ary) {
    let sum = 0;
    // for (let i = 0; i < numAry.length; i++)
    for( let i in ary){
        sum += ary[i];}
        return sum;
}


let numAry = [20, 27, 33, 19, 45]
let result = sumAry(numAry);
console.log('배열의 합:' + result);

result = 0;
numAry.forEach(function (val, idx, ary) { //익명함수
    // console.log('hiii');
    // console.log(a,b,c);
    if (val % 2 == 1) {
        result += val;
    }
}); //메소드의 매개값으로 함수: 콜백함수.

console.log('배열의 합:' + result);