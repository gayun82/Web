let arr = []; //new Array();new Object()/{}
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1]; //배열값 지우기

console.log(arr);
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('------------------------------');
//확장 for
for (let val of arr) {
    console.log(val);
}
console.log('------------------------------');
//forEach
arr.forEach((val, idx) => {
    console.log(`${idx}=>${val}`); //배열의 값 undefined 이면 반복에서 제외.
});
console.log('------------------------------');
arr.push('Apple'); //추가
arr.unshift('Banana'); //추가
arr.pop(); //마지막 삭제
arr.shift(); //첫번쨰 삭제
arr.splice(0, 0, 'Apple'); //추가, 수정, 삭제

arr.forEach((val, idx) => {
    console.log(`${idx}=>${val}`);
});