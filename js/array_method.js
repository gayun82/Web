//some:조건을 만족하는 요소 하나라도 true/false
//every: 조건을 만족하는 요소 true/fals,
//find:찾기, findIndex: 인덱스
//indexOf:배열 요소 => 인덱스값 반환
//sort();정렬
//split(구분자); 문자열 => 배열
//join(구분자); 배열 => 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8);

let str = "A demonstration of what can be accomplished through CSS-based design"
let strAry = str.split(' '); //반환타입이 배열 공백을 기준으로 나누겠다
idx = strAry.indexOf('design'); //lastIndexOf();
let names = ['박은지', '윤정은', '박지혜', '김나희']
idx = names.indexOf('김나희s');

let result = names.find(function (elem, idx, ary) {
    return elem == "김나희"
});

result = [6, 4, 3, 21, 14].findIndex(elem => {
    return elem % 7 == 0;
    //return elem > 100; //find하면 undefined값이 나옴
});

result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    console.log(elem, idx, ary);
    return elem > 20; //만족하는 요소(값)이 하나 있으면 ture

});
console.log('----------------------------------');
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    console.log(elem, idx, ary);
    return elem % 2 == 0;
})
console.log(result);

console.clear();
let tempAry = [];
for (let i = 0; i < 15; i++) {
    let temp = parseInt(Math.random() * 10); //0 <= x < 10 =>1~10까지의 임의 수 .// parseInt정수로 바꿔줌
    console.log(temp);
    tempAry.push(temp);
}
//1. tempAry 배열의 값이 다 짝수인지 확인
temp = tempAry.every((elem, idx, ary) => {
    return elem % 2 == 0;
});
console.log('짝수인지 확인' + temp);
//2. tempAry 배열의 값 중에 3의 배수 존재 확인
temp = tempAry.filter((elem, idx, ary) => {
    if (elem % 3 == 0) {

    }
})
//3. 5보다 큰 값이 있으면 그 값을 반환.
console.clear();
result = [6, 4, 3, 21, 14].sort(function (a, b) {
    // return a - b; //6,4 양.-오름차순 +내림차순

    // if (a < b) {
    //     return 1; //오름차순
    // } else {
    //     return -1; //내림차순
    // }
    console.log(a, b);
    return a - b; //음의 값 : 오른차순.
});

let objAry = [{
    name: "홍길동",
    age: 18
}, {
    name: "김민수",
    age: 20
}, {
    name: "박세민",
    age: 19
}];
console.clear();
console.log("홍" < "박"); //a b c 우선순위 존재
result = objAry.sort(function (a, b) {
    // if(a.name <b.name){
    //     return -1;
    // }else {
    //     return 1;
    // }
    // return a.name < b.name ? -10 : 10;//이름 오름차순
    return a.age < b.age ? -1 : 1;

});

result = ['홍길동', '백민규', '김상우'].join('-'); //,아무것도 안넣으면 구분자 ,(콤마)
names = '권소정, 김하은, 유선희, 김가윤'; // =>'권소정, 김가윤, 김하은, 유선희'
//기능구현.
result = names.split(', ').sort(function(a, b) {
    if(a < b){
        return -1;
    }else{
        return 1;
    }
}).join(', ');

console.log(result);

strAry = 'Littering'.split(''); //하나씩구분
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0;
    // console.log(cnt);
});

cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
// console.log('cnt: '+cnt);