let obj = {
    name: '홍길동',
    major: '컴퓨터 공학',
    grade: 3
}

let json = JSON.stringify(obj);

console.log(obj);
console.log(json);

let str = `{ "name": "김영희", "major": "신문방송학", "grade": 2 }`;
let obj2 = JSON.parse(str);
console.log(obj2);