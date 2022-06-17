//테이블 생성함수

function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHead(fields); //<thead><tr><th> ...</th></tr></thead>
    tag += head;

    let body = createBody(fields); //<tbody><tr><td>값</td>...</tr></tbody>
    tag += body;

    tag += '</table>'
    //<table>...</table>
    return tag;

}
//헤더부분 함수
function createHead(fieldData) {
    let str = '<thead><tr>'
    // for(let elem in fields){
    //     tag += '<th>' + fields[f] + '</th>';
    // };
    // tag += '</tr>';
    // return tag;
    fieldData.forEach(elem => {
        str += '<th>' + elem + '</th>';
    });
    str += '</tr></thead>';
    return str;

}
//바디부분 함수 
function createBody(bodyData) {
    let str = '<tbody>';
    bodyData.forEach(elem => {
        str += '<tr>'
        for (let field in elem) {
            str += '<td>' + elem[field] + '</td>'
        }
        str += '</tr>'
    });
    str = '</tbody>';
    return str;

    // for(let elem of bodyData){
    //     str += '<tr>';
    //     for(let field in elem){
    //         str += '<td>'+ elem[field]+ '</td>';
    //         }
    //         str += '</tr>';
    // }

}

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.3,
        weight: 72.3
    },
    {
        sname: '김민수',
        age: 24,
        height: 182.3,
        weight: 79.3
    }
]


let str = createTable();
document.write(str);