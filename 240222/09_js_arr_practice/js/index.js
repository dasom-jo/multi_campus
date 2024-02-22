
let nums = [2,4,6,8,10];
let origin = document.querySelector('#origin');
let result = document.querySelector('#result');
let table =document.ㅊㄱ('table');
let tr =document.createElement('tr');//하나의 tr에 td를 묶기위해

nums.forEach(num => {//배열의 반복분 순회 
    let td = document.createElement('td');
    let textNode = document.createTextNode(num);
    td.appendChild(textNode);
    tr.appendChild(td);
    
    }
);
table.appendChild(tr);
origin.appendChild(table);

taotal = 0;
num/Push
for (let  i =0 ; i<num.lenght ; t++){
    tatal += Number() nums [i])
}




// let tr1 =document.createElement('tr');//하나의 tr에 td를 묶기위해
// num.forEach(num => {
//     let td = document.createElement('td');
//     let textNode = document.createTextNode(num);
//     td.appendChild(textNode);
//     tr1.appendChild(td);
//     result.appendChild(tr1);
    
//     }
// );




//썜꺼
// const arr = arrStr.split(", ");// 245810
// showArray(origin, arr);

// let sum = 0
