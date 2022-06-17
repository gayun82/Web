

let str ='Hello';//문자열
let str1 = new String('Hello'); // 문자열 객체(object)

console.log(str == str1);//값
console.log(str === str1);// 타입 &값
console.log(str === str1.valueOf);

let num = new Number(123);//number=> object
let num1 = 123;//number
console.log(num === num1);
console.log('---------1-------');
console.log((123).valueOf());//객체 => 기본데이터타입으로 변환.
console.log('123');

//원시타입: string , number, boolean,
// 그외 객체타입 : 함수, object({name:? , age:?}), 배열 ,

"Hello".substring(0, 3);

console.log(" Hello ");
console.log(" Hello ".trim());
console.log(" Hello ".trimStart());
console.log(" Hello ".trimEnd());


console.log("This is the only story".slice(10,15)); //10번째 부터 15번째 까지 출력(15포함)
console.log("This is the only story".substr(10,15));
console.log('------------2--------------');

const str2 = 'This is the only story';
console.log(str2);
console.log(str2.slice(8,11));
console.log(str2.slice(-8,11));//x

console.log(str2.slice(10,4));//x
console.log(str2.slice(30));//x

console.log(str2.slice(0,-10));
console.log(str2.slice(8,100));

console.log('-----------3---------------');
const str3 = 'This is the only story';
console.log(str3.substring(8,11));
console.log(str3.substring(11,8));

console.log(str3.substring(11,-8));//(0,11)값 반환
console.log(str3.substring(10,4));

console.log('-----------4---------------');
const numb1 = 123;
const numb2 = 123.45;
const bool =true;
const str4 = '문자열타입';
const arr = [1,2,'a','b',3];
const obj1 = {key: 'data', value: 15};

console.log(numb1.toString());
console.log(numb2.toString());
console.log(bool.toString());
console.log(str4.toString());
console.log(arr.toString());
console.log(obj1.toString());//객체표시
console.log(obj1.key.toString());
console.log(obj1.value.toString());

console.log('-------------5----------------');
let ary = [];
let obj = {};
let reg =/good/;//new RegExp();
let regStr ="bad MORNING, GOOD AFTERNOON, goodevening, and good night";
console.log(regStr.replace(/good\s/gi, 'bad'));

console.log('----------------6----------------');
const str5 = 'good morning, good afternoon, good evening, and good night';
console.log(str5.charAt(30));
console.log(str5.charAt(100));

console.log(str5.includes('even'));
console.log(str5.includes('dawn'));
console.log('----------------7------------------');
const str6 = 'good morning, good afternoon,  GOOD EVENING, AND GOOD NIGHT';
console.log(str6.toLowerCase().indexOf('good'));
console.log(str6.toUpperCase().indexOf('GOOD'));
console.log(str6.search('GOOD'));
console.log(str6.search(/GOOD/i));//대소 상관없이
console.log('-----------------8-------------------');

const str7= 'bad MORNING, GOOD AFTERNOON, good evening, and good night'
console.log(str7.match(/good\s\w+/gi));
console.log(str7.match(/bad\s\w+/gi));
console.log(str7.match(/none\s\w+/gi));
console.log(str7.match('good'));

