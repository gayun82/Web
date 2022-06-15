//variable2.js

let str = '<table border=1>';
for (let i = 1; i < 10; i++) {
    str += '<tr><td>' + 2 + '</td><td>' + '*' + '</td><td>' + i + '</td><td>' + '=' + '</td><td>' + (2 * i) + '</td>'
}
str += '</table>';
console.log(str);
document.write(str);
//
let str2 = '<table border=1>'
let num = 2;
for (let i = 1; i <= 9; i++) {
    str2 += '<td>' + num
}
str2 += '</table>'
document.write(str2);
//
let str3 = '<table border=1>'
let num2 = 5;
for (let i = 1; i <= 9; i++) {
    str3 += '<td>' + num + '</td><td>*</td><td>' + i + '</td><td>' + (num2 * i) + '</td>'
}
str3 += '</table>'
document.write(str2);


//달력.
let mon = 12;
showCalendar(mon);//mon에 직접 숫자를 넣어도됨

function showCalendar(month) {
    let days = ['일', '월', '화', '수', '목', '금', '토']
    str4 = '<table border=1><tr>';
    for (let day of days) {
        str4 += '<th>' + day + '</th>';
    }
    str4 += '</tr><tr>'
    let vtd = getFirstDay(month); //4
    // let vtd1 = getLastDate(6);
    for (let i = 1; i < vtd; i++) {
        str4 += '<td></td>';
    }
    for (let i = 1; i <= getLastDate(month); i++) {
        str4 += '<td>' + i + '</td>';
        if ((vtd - 1 + i) % 7 == 0) {
            str4 += '<tr></tr>'
        }
    }
    str4 += '</table>';
    document.write(str4);
}

console.log(getFirstDay(month));

function getLastDate(mon) {
    //1,3,5,7,8,9,10,12 =>31
    //4,6,9,11 =>30
    //2 => 28
    switch (mon) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default: 31;
            // case 1 :
            //     return 31;
            // case 2 :
            //     return 28;
            // case 3 :
            //     return 31;
            // case 4 :
            //     return 30;
            // case 5 :
            //     return 31;
            // case 6 :
            //     return 30;
            // case 7 :
            //     return 31;
            // case 8 :
            //     return 31;
            // case 9 :
            //     return 30;
            // case 10 :
            //     return 31;
            // case 11 :
            //     return 30;
            // case 12 :
            //     return 31;

    }
}

function getFirstDay(mon) {
    switch (mon) {
        case 1:
            return 7;
        case 2:
            return 3;
        case 3:
            return 3;
        case 4:
            return 6;
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        case 8:
            return 2;
        case 9:
            return 5;
        case 10:
            return 7;
        case 11:
            return 3;
        case 12:
            return 5;
    }

}