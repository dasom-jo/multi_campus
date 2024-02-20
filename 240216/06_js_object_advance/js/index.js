let name = '손흥민';
let age = 30;
let backNumber = 7;

let son = {
    name : name, // name
    age : age, // age 앞에것 삭제가능
    backNumber : Number,
}

console.log(son);
console.log(son.address); //없는 키에 접근하면 undefined 값이 반환
console.log('address' in son); //in키워드로 객체에 해당 카가 존재하는지 여부체크 false
console.log('name' in son); //true

for (let key in son) {
    console.log(key, son[key]);
}
//key는 son안에잇는 내용들


// for (let key in 객테) {}
