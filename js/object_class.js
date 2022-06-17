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
