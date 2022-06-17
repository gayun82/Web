let data = [{
        sname: 'Hong',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: 'Hwang',
        age: 20,
        height: 175.3,
        weight: 72.3
    }
]

class Table {
    //생성자
    constructor(ary) {
        this.aryData = ary; //[{},{}]

    }
    //메소드
    creteTable() {
        this.tag = '<table border=1><tr>';
        //헤더정보 <thead>...</thead>
        for (let field in this.aryData[0]) { //{sname::'Hong', age:15}
            this.tag += '<th>' + field + '</th>';
        };
        this.tag += '</tr>';
        //바디정보 <tbody>...</tbody>
        this.aryData.forEach((val, idx) => {
            // console.log(val);
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });
        this.tag += '</table>'
        return this.tag;
    }


}

let table = new Table(data);
let str = table.creteTable(); //표형식으로 화면 출력
console.log(str);
document.write(str);

console.log('HongKildong'.length); //11
let names = ['Hong', 'Hwang', 'Kim', 'Park'];

let searchName = names.find(function (val) {
    // return val == 'Hwang';//true => 반환.
    return val.length == 4;
});
console.log(searchName);


//object 타입으로 기능
//object_clss