function makeObj(name, age) {
    let Obj = {
        name,
        age,
        team: 'BTS',
        bts,
    };
    return Obj;
}

let bts = function() {
    console.log('안녕하세요 BTS 입니다.');
} 
let jin = makeObj('김석진', 28);
let kook = makeObj('전정국', 24);
let jimin = makeObj('박지민', 26);
let v = makeObj('김태형',25);

console.log(v);



// function makeObj(name, age) {
//     let Obj = {
//         name,
//         age,
//         team: 'BTS '
//     };
//     return Obj;
// }

// let bts = function() {
//     // return 'bts';
//     console.log('안녕하세요');
// } 

// let jin = makeObj('김석진', 28);
// let kook = makeObj('전정국', 24);
// let jimin = makeObj('박지민', 26);
// let v = makeObj('김태형',25);

// console.log(v);
// v.bts(); //객체안 함수도 호출 가능 
