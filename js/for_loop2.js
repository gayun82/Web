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
let ary = JSON.parse(data);
console.log(ary);
//forEach
ary.forEach(elem => {
    if (elem.gender == 'Female') {
        //elem.id % 2 == 1
        console.log(elem)
    }
});

// let femaleAry = ary.filter(); //gender == 'Female'
// console.log(femaleAry);
console.clear();
let newCompany = ary.map(elem => { //elem : A
        let newElem = {}; //A'만들려고 오브젝트 선언 // newElem :A'
        newElem.nId = elem.id;
        newElem.name = elem.first_name + ',' + elem.last_name;
        newElem.salary = elem.salary * 1.5;
        newElem.isNew = elem.salary > 4000 ? false : true;
        return newElem;
    }) //A -> A'
    // .forEach(elem => console.log(elem));
    .filter(elem => elem.isNew);
// .forEach(elem => console.log(elem));
console.log(newCompany);

let result = newCompany.reduce((accum, curr) => {
    let sum = 0;
    console.log('급여' + curr.salary)
    accum += curr.salary
    console.log(accum)
    return accum ;
},0); //새로운회사 직원 급여합
console.log('급여 합:'+result);
