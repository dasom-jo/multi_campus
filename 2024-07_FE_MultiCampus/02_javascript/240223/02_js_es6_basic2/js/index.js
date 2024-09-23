/* 구조 분해 할당 [배열] */
let fruits = ['딸기', '바나나', '복숭아'];
// let berry = fruits[0];
// let banana = fruits[1];
let [berry, banana] = fruits;
console.log(berry, banana);

let members = ["조다솜", "박석원", "이가영", "이은수", "박소희"]
let [leader, ...team_member] = members;
console.log(leader, team_member);

/* 두 변수 값 교환하기  */
let left = '키보드';
let right = '마우스';

// let pocket = left;
// left = right;
// right = pocket;
[right, left] = [left, right];
console.log(left, right);

/* 구조 분해 할당 [객체] */
const user = {
    name: '홍길동',
    age: 20,
}

// let name = user.name;
// let age = user.age;
let { name, age } = user; // key 이름과 변수 이름을 동일하게 사용
console.log(name, age);

// let userName = user.name;
// let userAge = user.age;
let { name:userName, age:userAge } = user; // key 이름과 변수 이름을 다르게 사용
console.log(userName, userAge);

/* 구조 분해 할당 [중첩된 객체, 배열] */
const student = {
    name: '홍길동',
    age: 20,
    scores: {
        kor : 90,
        math: 100,
        eng: 80,
    },
    friends: ['철수', '맹구', '유리']
}

let { name: studentName, scores:{kor, eng}, friends:[f1, f2, f3]} = student;
console.log(name, kor, eng, f1, f2, f3);