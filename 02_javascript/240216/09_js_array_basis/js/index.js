let students = [
    '김다빈', '김민수', '김수아', '김우진', '김진영',
    '노성현', '노효민', '손예림', '오동석', '이가영',
    '이은수', '박유진', '박형준', '박석원', '박소희',
    '조다솜', '차민성', '최승관', '하성덕', '호경화','최인규'
]

console.log(students);
//0부터 시작한다

console.log(students.length);
//배열수 알수잇음


//배열 최인규라는  불순분자  호출시 21번
console.log(students[20]);
//맨뒤에꺼가 나오고싶으면
console.log(students[students.length-1]);
//내번호

//수정 요소 수정 이름이 바뀜 학생아님으로
students[20]='학생아님';
console.log(20);


//배열내 요소 추가(100이면 그사이에 중간이 공백생기고 배열이 길어짐 )
students[21]='최인규'
console.log(students);
//요소추가2 배열의 마지막 번호르 알필요가없음
students.push('최인규','최인규','최인규');//맨끝에 요소 추가/여러개가능
students.unshift('최인규');//맨 앞에 요소 추가
console.log(students);

//삭제 /delete는 위험
students.pop(); //맨끝에 요소를 제거
students.shift(); //맨앞에 요소 제거
console.log(students);



let rainbow = ['빨', '주', '노', '초', '파', '남', '보']

for (let i=0; i<rainbow.length; i++) {
    console.log(students[i]);
}
//요소ㅁ만 쓰려면
for (let Element of rainbow) {
    console.log(Element);
}
//key=index,둘다쓰려면
for(let index in rainbow) {
    console.log(typeof(index));
    
    console.log(rainbow(index));
}



console.info("================================")

let arrSample = [
    '조다솜',
    20,
    true,
    {
        name: '이대희',
        music: 'love',
        sing: function() {
        console.log('졸려워');
    }
},
function () {
    console.log('배열에는 문자 숫자 객체등을 다양하게 입력할수잇다');
}
]

console.log(arrSample);
arrSample[3].sing();

console.log(arrSample[0]);
console.log(arrSample[1]);
console.log(arrSample[2]);
console.log(arrSample[3]);
arrSample[4]();
//[]는 배열의 요소를 불러옴 