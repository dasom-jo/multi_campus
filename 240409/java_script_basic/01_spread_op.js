//배열은 [] , 객체는 {}

let [name,...info] = ["최인규",17,'서울'];
console.log(name);
console.log(info); //둘다 하나의 배열로나옴

let names = ['장구','철수','유리'];
let students = ['조다솜',...names,...names];
console.log(students);
// [
//     '조다솜', '장구',
//     '철수',   '유리',
//     '장구',   '철수',
//     '유리'
//     ]

let kor_names = ['장구','철수','유리'];
let students1 = ['조다솜',names,names];
console.log(students1); //요소 (배열) 세개
//[ '조다솜', [ '장구', '철수', '유리' ], [ '장구', '철수', '유리' ]]

//전개연산자
const arr = ['사과','어렌지','딸기','수박','멜론'];
// const [사과,오렌지,rest] = arr;///[딸기]
const [사과,오렌지,...rest] = arr;//[ '딸기', '수박', '멜론' ]
// const [사과,오렌지,[...rest]] = arr;//[ '딸', '기' ]
console.log(rest);//[ '딸기', '수박', '멜론' ]


