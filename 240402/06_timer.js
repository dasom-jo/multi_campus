// const timeout = setTimeout(콜백,시간)
//일정시간후 함수실행
const timeout = setTimeout(() => {
    console.log('1.5초후');
},1500);
//일정시간마다 반복실행
const interval = setInterval(()=>{
    console.log('1초마다 실행');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('실행될수없습니다');
},3000);

setTimeout(()=>{
    clearInterval(interval);//setInterval 함수를 중지하는데사용
    clearTimeout(timeout2) //setimeout 함수를중지
},2500)

const Immediate = setImmediate(()=>{
    console.log('즉시실행');
})


const immediate2 = setImmediate(()=>{
    console.log('이건 실행되지않습니다');
})

clearImmediate(immediate2);