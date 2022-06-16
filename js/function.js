//function.js

function sum(a , b) {
    let result = a + b;
    console.log(result);
    return result;//undefined. return문이 없으면 
}
sum(10, 20);
console.log(sum(10, 20));

function makeTd(val) {
    return'<td>'+val +'</td>';
}
function makeTr(val) {
    return'<tr>' + val + '</tr>';
}
let values = ['hong', 'hwang', 'choi'];

let str = '<table border=1>';
for(let val of values) {
    let td = makeTd(val)//<td>hong</td>
    str += makeTr(td);//<tr><td>hong</td></tr>
}
str +='</table>';
document.write(str);