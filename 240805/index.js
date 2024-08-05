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
//function(value, index, array){}
//value: 현재 처리 중인 배열 요소의 값
//index: 현재 처리 중인 배열 요소의 인덱스
//array: forEach가 호출된 배열 자체 (여기서는 numbers 배열)
const numbers = [273,52,103,32,57]
numbers.forEach(function(value,index,array){
    console.log(`${index}번째 요소:${value},array${array}`);
})
