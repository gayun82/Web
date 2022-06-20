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

let gender = prompt('Male or Female 을 입력');
console.log(gender);

let objAry = JSON.parse(data); //문자열 => 오브젝트
console.log(objAry);
console.log('-------------------------');

//표(table) 형태로 출력
let result = objAry.reduce(function (accum, curr, currIdx) {
    if(currIdx == 0){
        accum += '<table border=1px>'
    }
    if(curr.gender == gender){
        accum += '<tr>';
        for(let field in curr){
            accum += `<td>${curr[field]}</td>`;
        }
        accum += '</tr>'
    }
    if(currIdx == objAry.length -1){
        accum += '</table>';
    }
    return accum;
},'');

// let result = objAry.reduce(function (accum, curr) {
//     if (gender == curr.gender) {
//         accum +='<table border=1px>';
//         for (let i of objAry) {
//            accum +='<tr>';
//            accum +='<td>'+i.first_name+'</td>';
//            accum +='<td>'+i.email+'</td>';
//            accum +='<td>'+i.salary+'</td>';
//            accum += '</tr>';
            
//         }accum += '</table>'
//         return accum;
        
//     }

// }, '');
document.write(result);