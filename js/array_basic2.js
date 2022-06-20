let data = `[{"id":1,"first_name":"Elora","last_name":"Melesk","email":"emelesk0@slashdot.org","gender":"Female","salary":1886},
{"id":2,"first_name":"Link","last_name":"Coonihan","email":"lcoonihan1@theguardian.com","gender":"Male","salary":2587},
{"id":3,"first_name":"Jeffie","last_name":"Flaxman","email":"jflaxman2@mit.edu","gender":"Male","salary":2323},
{"id":4,"first_name":"Mabelle","last_name":"Barbie","email":"mbarbie3@example.com","gender":"Female","salary":3260},
{"id":5,"first_name":"Murray","last_name":"Gostyke","email":"mgostyke4@comcast.net","gender":"Male","salary":3831},
{"id":6,"first_name":"Antonietta","last_name":"Chitham","email":"achitham5@ft.com","gender":"Female","salary":2703},
{"id":7,"first_name":"Nancie","last_name":"Vitet","email":"nvitet6@unc.edu","gender":"Female","salary":4357},
{"id":8,"first_name":"Kenny","last_name":"Rackham","email":"krackham7@prlog.org","gender":"Male","salary":4065},
{"id":9,"first_name":"Dyan","last_name":"McGraith","email":"dmcgraith8@answers.com","gender":"Female","salary":2916},
{"id":10,"first_name":"Benjamin","last_name":"Vasiliu","email":"bvasiliu9@soundcloud.com","gender":"Male","salary":4631},
{"id":11,"first_name":"Ulrick","last_name":"McGarry","email":"umcgarrya@myspace.com","gender":"Male","salary":1026},
{"id":12,"first_name":"Fraze","last_name":"Tilberry","email":"ftilberryb@accuweather.com","gender":"Male","salary":2809},
{"id":13,"first_name":"Ellyn","last_name":"Bromehed","email":"ebromehedc@cnet.com","gender":"Female","salary":2498},
{"id":14,"first_name":"Alastair","last_name":"Grishaev","email":"agrishaevd@vkontakte.ru","gender":"Male","salary":2848},
{"id":15,"first_name":"Darcie","last_name":"Egar","email":"degare@answers.com","gender":"Female","salary":3594}]`;


let objAry = JSON.parse(data); // JSON.parse() :  문자열 => 오브젝트.
console.log(data);
console.log(objAry);
console.clear();
let over3000 = objAry.filter((val, idx) => { //{id:?, fname:?, lname:?, salary:?...}
    return val.salay >= 3000; //filtering 처리.
}).map((val, idx) => {
    let obj = {}; //A -> B
    obj.name = `${val.last_name},${val.first_name}`;
    obj.sal = val.salary;
    return obj;
})
console.log(over3000);

//Feamle 값 평균값을 기능 구현.
let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        cnt++;
    });
avg = sum / cnt;

console.log(`여사원의 급여 평균 ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
// salaries = objAry.map(val => val.salary);
console.log(salaries);


function getMaxValue(ary = []) {
    //배열요소에서 제일 큰값을 반환하는 함수
    let max = Number.MIN_SAFE_INTEGER;
    ary.forEach(val => {
        if (max < val) {
            max = val;
        }

    })
    return max;

}

function getMinValue(ary = []) {
    //배열요소에서 제일 작은 값을 반환하는 함수
    let max = Number.MAX_SAFE_INTEGER;
    ary.forEach(val => {
        if (min > val) {
            min = val;
        }

    })
    return min;

}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰값 : ${maxVal}`);

// function sortAscend(ary = []) {
//     //오름차순 정렬하는 함수.
//     let numAry = ary;
//     let newAry = [];
//     ary.forEach(val => {
//         let minVal = getMinValue(numAry);
//         newAry.push(minVal);
//         let idx = numAry.indexOf(maxVal)
//         numAry.splice(idx, 1, )
//     });
//     return numAry;
// }

// result = sortAscend(salaries);
// console.log(salaries);
console.clear();

//reduce 메소드.[1,2,3,4]
result = [1, 2, 3, 4].reduce(function (accum, curr, curIdx, ary) {
    console.log(`누적&{accum},current 값 ${curr} => 두수의 합 ${accum + curr}`);
    return curr + accum;
}, 0); //map,filter 메소드
console.log(`최종결과 : ${result}`)

result = /*salaries*/ [1, 2, 3, 4].reduce(function (accum, curr) {
    accum.push(curr); // 배열의 추가.
    return accum;
}, []); //accum = [1],[1,2],[1,2,3],[1,2,3,4]

// result = [1,2,3,4].map(val => val);
// result = [1,2,3,4].filter(val => {
//     if(val %2 == 0)
//     return val;
// })
console.log(result);
//<ul><li>Apple</li><li>Banana</li><li>cherry</li></ul>
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) {
        accum += '</ul>';
    }
    console.log(accum); //<ul><li>Apple</li>
    return accum;
}, '');
console.log(result);
document.write(result);

result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum > curr)
        return accum;
    else return curr;
}, Number.MAX_SAFE_INTEGER);
// ,Number.MIN_SAFE_INTEGER);//max 값을 반환
// console.log(Number.MIN_SAFE_INTEGER);

result = [3, 2, 4, 1, 5].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == ary.length - 1) { //마지막 순번일 경우에
        return (accum + curr) / ary.length;
    }
    return accum + curr;
}); //평균 구하기.
console.log(result);