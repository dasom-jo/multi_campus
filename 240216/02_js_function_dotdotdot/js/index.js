let name = '조다솜';
let age = 20;
let height = 100;
let weight = 100;

// console.log(name, age, height, weight);

function docLog(...data) {
    for (let item of data) {
        document.write(item);
        document.write('<br/>');
    }
}


// docLog(name);
// docLog(name, age);
// docLog(name, age, height, weight);


function dogLog2(name,age,...data) {
    document.write(`이름 : ${name}`);
    document.write('<br>');
    document.write(`나이 : ${age}`);

    for (let item of data) {
        document.write(`<p>${item}</p>`);
        document.write('<br>');
    }
}

dogLog2(name,age,height,weight);
//E따로 뺴줄수잇음 넣고싶으면 따로 함수 작성 . 하나뿐 아니라 두개 세개도 가능 

