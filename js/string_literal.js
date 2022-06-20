let str = 'Hello'; //"Hello"
str = `Hello`; //``문자열 표현

let person = {
    name: "hong",
    age: 20,
    showInfo: function () {
        // return '이름은' + this.name +', 나이는' +this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}

console.log(person.showInfo());

console.log(`나의 이름는 ${person.name}`);

console.log(`${person.age > 20 ? '성인' : '청소년'}`); //삼항연산자

let strings = 'This\nis\na\nboy'; //줄바꿈
strings = `This
is
a
boy`;
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = '950101-1234567'


function chexkGender(num) {
    // let jnum = num.replace('-,'');
   
    //체크
    if (num.charAt(7) == 1 || num.charAt(7) == 3) {
        console.log('남자');
    } else if (num.charAt(7) == 2 || num.charAt(7) == 4){
        console.log('여자');
    }
        //return '남자' || '여자';

    
}
let result = chexkGender(jm);