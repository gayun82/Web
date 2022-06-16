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

//p99 // {unit:param}
class Estimate {
    constructor(param) {
        this.unit = param;
    }
    //견적가 얻기 메서드
    getEstimate(unittype, width, height) {
        let priceinfo = this.unit.find(item => item.type == unittype);
        return priceinfo.price * width * height;
    }
    //배열에 요소 추가 메서드
    addUnit(unit) {
        this.unit.push(unit);
    }
}
let unitinfo = [{
        type: 'wood',
        price: 100
    },
    {
        type: 'iron',
        price: 300
    },
    {
        type: 'plastic',
        price: 200
    }
];
const estimate = new Estimate(unitinfo);
estimator = new Estimate(unitinfo);
estimator.addUnit({type:'glass', price: 500});//새로운 단위 추가.

let result = estimate.getEstimate('wood',20,20);
console.log(result);

//object 타입으로 기능
let obj = {
    // unit: unitinfo,
    // getEstimate: function(){},
    // addUnit:function(){}
};
obj.unit = unitinfo;
obj.getEstimate = function(unittype,width,height){
    let priceinfo =this.unit.find(item => item.type == unittype);
    return priceinfo.price*width*height;
}
obj.addUnit = function(unit){
    this.unit.push(unit);
}
let result1 = obj.getEstimate('wood',20,20);
console.log(result1);