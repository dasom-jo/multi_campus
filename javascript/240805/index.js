'use strict';
//콜백함수
function callThree (callback){
    for(let i=0; i<3;i++ ){
        callback(i)
    }
}

// function print(i){
//     console.log(`${i}번째 함수호출`);
// }

// callThree(print)


callThree(
    function print(i){
        console.log(`${i}번째 함수호출`);
    }
)

//foreach()
//목적:배열에 각요소에대해 주어진 작업을 수행, 주로 부수효과를 위해 사용됩니다 (콘솔에출력,dom조작)
//function(value, index, array){}
//value: 현재 처리 중인 배열 요소의 값
//index: 현재 처리 중인 배열 요소의 인덱스
//array: forEach가 호출된 배열 자체 (여기서는 numbers 배열)
// const numbers = [273,52,103,32,57]
// numbers.forEach(function(value,index,array){
//     console.log(`${index}번째 요소:${value},전체배열:${array}`);
// })

//map----------
//목적: 배열의 각요소를 변환하여 새로운 배열을 생성
//반환값:변환된 요소들로 구성된 새로운 배열 반환
// let mapMumber =[273,156,75,2,186]
// mapMumber = mapMumber.map(function(value,index,array){
//     return value * index
// })
// mapMumber.forEach(console.log)

//filter----------------
const filterNumbers = [0,1,2,3,4,5]
const evebNumbers = filterNumbers.filter(function(value){
    return value % 2 === 0
})

console.log(`원래배열${filterNumbers}`);
console.log(`짝수배열${evebNumbers}`);

//화살표함수
//function 키워드 대신 (=>)를 사용 (매개변수)=>{}
let totalNumbers = [0,1,2,3,4,5,6,7,8,9]
totalNumbers
    .filter((value)=>value % 2 === 0)
    .map((value)=>value*value)
    .forEach((value)=>{
        console.log(`짝수이면서 곱한값:${value}`);
    })

//타이머함수
//setTimeout(함수,시간):특정시간후에 함수를 한번 호출합니다
// setInterval(() => {
     //함수:특정시간마다 함수를 호출
// }, 시간);

// setTimeout(()=>{
//     console.log('1초후 실행됩니다');
// },1000)

// let count = 0
// setInterval(()=>{
//     console.log(`1초마다 ${count}번째 실행중입니다`);
//     count++
// },1000)

//clearTimeout(타이머 아이디) setTimerout() 함수를 설정한 타이머를 제거합니다
//clearInterval(타이머아이디) setInterval()함수 타이머를 제거

let id
let count1 = 0
id = setInterval(()=>{
    console.log(`1초마다 실행됩니다${count1}번쨰실행중`);
    count1++
},1000)

setTimeout(()=>{
    //setTimeout를 쓴이유는 setInterval를 쓰면 타이머 종료가 오초마다 계속 반복됨
    console.log(`타이머종료`);
    clearInterval(id)
},5000)

//익명함수와 선언적 함수
//1-1익명함수
let anonymous
anonymous = function(){
    console.log('1번째 익명함수입니다');
}
anonymous = function(){
    console.log('2번째 익명함수입니다');
}
anonymous()
//2번째 익명함수입니다

//1-2 선언적 함수
선언적함수()
function 선언적함수(){
    console.log('1번째 함수');
}
function 선언적함수(){
    console.log('2번째 함수');
}
//2번째 함수


let number = [273, 25, 75, 52, 103, 32, 57, 24, 76];

number = number.filter((number) => {
    return number % 2 !== 0 && number < 100 && number % 5 === 0;
});

console.log(number);

const array = ['사과','배','귤','바나나']
console.log(`#for in 반복문`);
array.forEach((value,index)=>{
    console.log(`array의 인덱스는: ${index}`);
})
array.forEach((value,index)=>{
    console.log(`array의 요소는: ${value}`);
})


