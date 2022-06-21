//배열관련 반복되는 메소드
//forEach: void, map : [베열]A ->A', filter [배열]A ->B, reduce: 문져열, Number,[배열],{}

let ary = [3, 5, 8, 9, 12]; //배열객체 : new Array();
ary.push(5); //pop(); 마지막
ary.unshift(7); //shift(); 맨앞

ary.splice(3, 1); //대체값을 안넣으면 삭제
console.log(ary);

ary.forEach(elem => console.log(elem)); // 콜백함수

let newAry = [];
let result = ary.forEach(firstCallBack);

function firstCallBack(elem) {
    // console.log(elem);
    newAry.push(elem);
}
console.log(newAry);

//2.map 새로운값을 반환하겠습니다.
result = ary.map(elem => elem * 2); //A -> A'(A*2)
console.log(newAry);

//filter A -> a 조건에 만족하는 것만 담아줌
result = ary.filter((elem, idx, arry) => idx > 3); 
                   //배열요소,인덱스,배열
console.log(result);

//4.reduce A -> 문자열, Number, [],{}
result = ary.reduce((accum,curr,currIdx,arry) =>{
    console.log(accum,curr,currIdx);
    return accum + curr;//값을 누적
},0);
 //초기값 0넘버 ''문자열
 result = ary.reduce((accum,curr)=> {
     console.log(accum,curr);
     accum.push(curr*2);
     return accum;
 },[]);// map 같은 기능

 result = ary.reduce((accum,curr,currIdx)=> {
        if(currIdx > 3){
            accum.push(curr * 2);
        }
        return accum;
 },[]);//fiter,map
console.log(result);                            