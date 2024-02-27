/*구조분해 할당*/
let fruits = ['딸기','바나나','복숭아'];
let [berry, banana] = fruits;
console.log(berry,banana);
// 구조 분해 할당 시 할당받는 변수의 개수가 원본 배열의 요소 개수보다 적기 때문입니다. 

let members = ['조다솜','박석원','이가영','이은수'] 
let [leader,...team_member] = members;
console.log(leader,team_member); //띄어쓰기안됨

/*두 변수 값 교환하기 */
let left = '키보드';
let right = '마우스';
[right,left] = [left, right];
console.log(left, right);

/*구조분해 할당 [객체] */
const user = {
    name: '홍길동',
    age: 20,
}
 // key 이름과 변수 이름을 동일하게 사용
let {name, age} = user;
console.log(name, age);
// key 이름과 변수 이름을 다르게 사용
let { name: userName, age:userAge} = user;
console.log(userName, userAge);

/*구조분해 할당 [중첩된 객체, 배열] */
const student = {
    name: '홍길동',
    scores: {
        kor : 90,
        math:100,
        eng:80,
    },
    friends: ['철수','맹구',"유리"]
}

let {name : studentName, scores:{kor,eng}, friends:[f1,f2,f3]} = student;
console.log(name, kor, eng,f1,f2,f3);